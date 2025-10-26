Package.Require("Config.lua")

local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Female")

local test = Particle(Vector(), Rotator(), "jknassets::NS_PrisonGlace")


Events.SubscribeRemote("LunchSpell", function (player, character, playerrotation)
    Console.Log(character)
    local owner = player:GetName()
    SpawnSpell(owner, character:GetLocation(), character:GetRotation(), playerrotation)
end)

function SpawnSpell(owner ,characterLocation, characterRotation, playerrotation)
    local spellprop = Prop(characterLocation, characterRotation, TEST.proppath, CollisionType.StaticOnly)
    spellprop:SetValue("owner", owner)
    local hitBox = Trigger(spellprop:GetLocation(), spellprop:GetRotation(), TEST.size, TriggerType.Sphere, true, Color.RED, {"Character"})
    hitBox:AttachTo(spellprop)
    hitBox:Subscribe("BeginOverlap", function (self, entity)
        Console.Log("Nathan")
    end)
    spellprop:Subscribe("Destroy", function ()
        
    end)
    AddImpulseToSpell(spellprop, characterLocation, characterRotation, playerrotation)
end

function AddImpulseToSpell(spellprop, characterLocation, characterRotation, playerrotation)
    local playerRotationForward = playerrotation:GetForwardVector()
    spellprop:AddImpulse(characterLocation+playerRotationForward*100000)
end

