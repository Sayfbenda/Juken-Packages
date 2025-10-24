function PlayerManager(player)
    SpawnPlayer(player)
end

function SpawnPlayer(player, health, energy)
    local character = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Mannequin")
    character:SetMaxHealth(health)
    character:SetValue("energymax", energy, true)
    player:Possess(character)
end

function GetPlayerValues()
    local health = HOKAGE.hpmax
    local energy = HOKAGE.energymax
end

function DestroyPlayer(player)
    local character = player:GetControlledCharacter()
	if (character) then
		character:Destroy()
	end
end
