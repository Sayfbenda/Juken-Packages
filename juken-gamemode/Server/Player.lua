
function SpawnPlayer(player, health, energy)
    local character = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Mannequin")
    character:SetMaxHealth(health)
    character:SetHealth(health)
    character:SetValue("energymax", energy, true)
    character:SetValue("energy", energy, true)
    character:SetValue("grade", GENIN ,true)
    player:Possess(character)
end

function DestroyPlayer(player)
    local character = player:GetControlledCharacter()
	if (character) then
		character:Destroy()
	end
end

function UpdateValuesGrade(self, grade)
    if (grade == "Hokage") then
        local character = self:GetControlledCharacter()
        if (not character) then
            return
        end
        character:SetMaxHealth(HOKAGE.hpmax)
        character:SetHealth(HOKAGE.hpmax)
        character:SetValue("energymax", HOKAGE.energymax, true)
        character:SetValue("energy", HOKAGE.energymax, true)
    end
end