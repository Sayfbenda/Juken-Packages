Package.Require("Config.lua")

local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Female")



Events.SubscribeRemote("LunchSpell", function (player, character, playerrotation)
    local owner = player:GetName()
    SpawnSpell(owner, character:GetLocation(), character:GetRotation(), playerrotation)
    
end)

function SpawnSpell(owner ,characterLocation, characterRotation, playerrotation)
    local spellprop = Prop(characterLocation, characterRotation, TEST.proppath, CollisionType.StaticOnly)
    local spellparticle = Particle(characterLocation, characterRotation, "jknassets::NS_Zone", false, true)
    spellparticle:SetCollision(CollisionType.StaticOnly)
    spellprop:SetValue("owner", owner)
    spellprop:SetVisibility(false)
    local hitBox = Trigger(spellprop:GetLocation(), spellprop:GetRotation(), TEST.size, TriggerType.Sphere, true, Color.RED, {"Character"})
    spellparticle:AttachTo(spellprop)
    hitBox:AttachTo(spellprop)
    SpellManager(hitBox, spellprop, spellparticle, owner)
    AddImpulseToSpell(spellprop, characterLocation, characterRotation, playerrotation)
end

function SpellManager(hitBox, spellprop, spellparticle, owner)
    hitBox:Subscribe("BeginOverlap", function (self, entity)
        local player = entity:GetPlayer()
        local name = "bot"
        if (player ~= nil) then
            name = player:GetName()
        end
        if (name ~= owner) then
            ApplyDamage(entity)
            spellprop:Destroy()
        end
    end)
    spellprop:Subscribe("Destroy", function ()
        hitBox:Destroy()
        spellparticle:Destroy()
        
    end)
end

function ApplyDamage(entity)
    entity:ApplyDamage(TEST.basedamage)
end

function AddImpulseToSpell(spellprop, characterLocation, characterRotation, playerrotation)
    local playerRotationForward = playerrotation:GetForwardVector()
    spellprop:AddImpulse(characterLocation+(playerRotationForward*3000), true)
end
