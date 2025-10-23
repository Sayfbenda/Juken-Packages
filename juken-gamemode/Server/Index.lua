Package.Require("Admin.lua")
Package.Require("Player.lua")

Player.Subscribe("Spawn", function (player)
    SpawnPlayer(player)
end)