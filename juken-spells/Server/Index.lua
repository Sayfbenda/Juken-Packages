Package.Require("Config.lua")

local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Female")

Events.SubscribeRemote("LunchSpell", function (player, character, playerrotation)
    Console.Log(character)
    local characterLocation = character:GetLocation()
    local characterRotation = character:GetRotation()
    SpawnSpell(character:GetLocation(), character:GetRotation(), playerrotation)
end)

function SpawnSpell(characterLocation, characterRotation, playerrotation)
    local spellprop = Prop(characterLocation, characterRotation, TEST.proppath, CollisionType.StaticOnly)
    local hitBox = Trigger(spellprop:GetLocation(), spellprop:GetRotation(), TEST.size, TriggerType.Sphere, true, Color.RED, {"Character"})
    hitBox:AttachTo(spellprop)
    AddImpulseToSpell(spellprop, characterLocation, characterRotation, playerrotation)
end

function AddImpulseToSpell(spellprop, characterLocation, characterRotation, playerrotation)
    local playerRotationForward = playerrotation:GetForwardVector()
    spellprop:AddImpulse(characterLocation+playerRotationForward*300000)
end