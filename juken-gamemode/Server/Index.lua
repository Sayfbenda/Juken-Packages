Package.Require("Database.lua")
Package.Require("Config.lua")
Package.Require("Admin.lua")
Package.Require("Player.lua")

function PlayerManager(player)
    local health = HOKAGE.hpmax
    local energy = HOKAGE.energymax
    VerifiyExistingPlayer(player)
    SpawnPlayer(player, health, energy)
end

Player.Subscribe("Spawn", function (player)
    PlayerManager(player)
end)

Player.Subscribe("Destroy", function(player)
	DestroyPlayer(player)
end)