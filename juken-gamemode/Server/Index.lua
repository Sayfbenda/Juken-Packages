Package.Require("Config.lua")
Package.Require("Admin.lua")
Package.Require("Player.lua")

function PlayerManager(player)
    SpawnPlayer(player)
end

Player.Subscribe("Spawn", function (player)
    PlayerManager(player)
end)

Player.Subscribe("Destroy", function(player)
	DestroyPlayer(player)
end)