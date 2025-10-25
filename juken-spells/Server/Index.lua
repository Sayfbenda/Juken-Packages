Package.Require("Config.lua")

local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Female")

Events.SubscribeRemote("LancerSpell", function (player)
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end
    local characterRotation = character:GetRotation()
    local loc = characterRotation:GetForwardVector()*100
    local test = loc + character:GetLocation()
    local spell = Prop(test, character:GetRotation(), TEST.proppath)
    spell:SetCollision(CollisionType.StaticOnly)
    local sphere_trigger = Trigger(spell:GetLocation(), Rotator(), TEST.size, TriggerType.Sphere, true, Color(1, 0, 0))
    sphere_trigger:AttachTo(spell)
    SubscribeHtibox(sphere_trigger)
    SpellEnlancement(spell, character)
    
end)

function SpellEnlancement(spell, character)
    local rotation = character:GetRotation()
    local forward = rotation:GetForwardVector()
    spell:AddImpulse(forward*10000, true)
end


function SubscribeHtibox(sphere_trigger)
    sphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
        Console.Log("Le goat")
    end)
end