Package.Require("Config.lua")

local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Female")

Events.SubscribeRemote("LancerSpell", function (player)
    local character = player:GetControlledCharacter()
    local characterLocation = character:GetLocation()
    local characterRotation = character:GetRotation()
    local particle = Particle(characterLocation, characterRotation, "NanosWorldAssets/Particles/Explosions/Particles/P_ShockWave_14", false)
    local hitBox = Trigger(particle:GetLocation(), Rotator(), TEST.size, TriggerType.Sphere, false, Color.RED, {"Character"})
    hitBox:AttachTo(particle, AttachmentRule.SnapToTarget, "" , -1, false)
    local owner = player:GetName()
    hitBox:SetValue("owner", owner)
    LancementSpell(player ,owner, particle, hitBox)
end)


function LancementSpell(player ,owner, particle, hitBox)
    hitBox:Subscribe("BeginOverlap", function(self, entity)
        local name
        if (entity:GetPlayer() == nil) then
            name = "pnj"
        else
            local controlledplayer = entity:GetPlayer()
            name = controlledplayer:GetName()
        end
        if ((hitBox:GetValue("owner") == owner) and (name == owner)) then
           Console.Log("C'est le owner") 
        else
            Console.Log("Un Personnage a été touché a été touché")
            particle:Destroy()
        end
    end)
    particle:Subscribe("Destroy", function (self)
        Console.Log("La particule a disparue")
    end)
end

