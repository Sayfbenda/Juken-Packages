Package.Require("Admin.lua")


Player.Subscribe("Spawn", function (player)
    SpawnPlayer(player)
end)