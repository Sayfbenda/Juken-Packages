Events.Subscribe("SetPlayerValues", function (player, health, energy)
    local character = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Mannequin")
    character:SetMaxHealth(health)
    character:SetHealth(health)
    character:SetValue("energymax", energy, true)
    character:SetValue("energy", energy, true)
    character:SetValue("grade", GENIN ,true)
    player:Possess(character)
end)

function SpawnPlayer(player, health, energy)
    Events.Call("SetPlayerValues", player, health, energy)
end

function DestroyPlayer(player)
    local character = player:GetControlledCharacter()
	if (character) then
		character:Destroy()
	end
end

function UpdateValuesGrade(self, grade)
    for i = 1, #GRADES, 1 do
        local newgrade = GRADES[i]
        Console.Log(newgrade.id)
        if (newgrade.id == grade) then
            local character = self:GetControlledCharacter()
            if (not character) then
                Console.Log("dommage")
                return
            end
            character:SetMaxHealth(newgrade.hpmax)
            character:SetHealth(newgrade.hpmax)
            character:SetValue("energymax", newgrade.energymax, true)
            character:SetValue("energy", newgrade.energymax, true)
            break
        end
    end
end