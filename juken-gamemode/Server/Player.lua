function SpawnPlayer(player)
    local character = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Mannequin")
    player:Possess(character)
end

Player.Subscribe("Destroy", function(player)
	
end)

function DestroyPlayer(player)
    local character = player:GetControlledCharacter()
	if (character) then
		character:Destroy()
	end
end