Package.Require("Config.lua")
Package.Require("Database.lua")
Package.Require("Admin.lua")
Package.Require("Player.lua")
Package.Require("Commands.lua")

function PlayerManager(player)
    local health = GENIN.hpmax
    local energy = GENIN.energymax
    SpawnPlayer(player, health, energy)
    VerifiyExistingPlayer(player)
end

Player.Subscribe("Spawn", function (player)
    PlayerManager(player)
end)

Player.Subscribe("Destroy", function(player)
	DestroyPlayer(player)
end)

Player.Subscribe("Possess", function(self, character)
	local name = self:GetName()
    SelectGrade(self, name)
end)

