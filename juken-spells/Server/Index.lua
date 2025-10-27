Package.Require("Config.lua")

local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Female")



Events.SubscribeRemote("LunchSpell", function (player, character, playerrotation, end_location)
    local owner = player:GetName()
    SpawnSpell(owner, character:GetLocation(), character:GetRotation(), playerrotation, end_location)
    Events.CallRemote("SpellTrace", player)
end)

function SpawnSpell(owner ,characterLocation, characterRotation, playerrotation, end_location)

    local spellparticle = Particle(characterLocation, characterRotation, "nanos-world::P_Explosion", false, true)
    spellparticle:SetCollision(CollisionType.StaticOnly)
    spellparticle:SetValue("owner", owner)

    local hitBox = Trigger(spellparticle:GetLocation(), spellparticle:GetRotation(), TEST.size, TriggerType.Sphere, true, Color.RED, {"Character"})
    hitBox:AttachTo(spellparticle)

    local playerRotationForward = playerrotation:GetForwardVector()

    Spell(spellparticle, playerRotationForward, end_location)
    SpellManager(hitBox, spellparticle, owner)
end

function SpellManager(hitBox, spellparticle, owner)

    hitBox:Subscribe("BeginOverlap", function (self, entity)
        local player = entity:GetPlayer()
        local name = "bot"
        if (player ~= nil) then
            name = player:GetName()
        end
        if (name ~= owner) then
            ApplyDamage(entity)
            end
        end)
    
    spellparticle:Subscribe("Destroy", function ()
        hitBox:Destroy()
        spellparticle:Destroy()
    end)
end

function SpellDestroy(spellparticle)
    Timer.SetTimeout(function()
        if spellparticle or spellparticle:IsValid() then
            spellparticle:Destroy()
        end  
    end, 500)
end

function Spell(spellparticle, playerRotationForward, end_location)
    local tickListener

    tickListener = Server.Subscribe("Tick", function (delta_time)
        if not spellparticle or not spellparticle:IsValid() then

            Server.Unsubscribe("Tick", tickListener)
            return
        end

        spellparticle:SetLocation(spellparticle:GetLocation() + (playerRotationForward * 8000 * delta_time))

        if spellparticle:GetLocation().Z <= end_location.Z then
            SpellDestroy(spellparticle)
            Server.Unsubscribe("Tick", tickListener)
            return
        end
    end)
end


function ApplyDamage(entity)
    entity:ApplyDamage(TEST.basedamage)
end

function AddImpulseToSpell(spellprop, characterLocation, characterRotation, playerrotation)
    local playerRotationForward = playerrotation:GetForwardVector()
    spellprop:AddImpulse(characterLocation+(playerRotationForward*3000), true)
end
