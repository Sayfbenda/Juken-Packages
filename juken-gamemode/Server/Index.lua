Package.Require("Admin.lua")


function SpawnPlayer(player)
    local character = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Mannequin")
    player:Possess(character)
    
end

Player.Subscribe("Spawn", function (player)
    SpawnPlayer(player)
end)