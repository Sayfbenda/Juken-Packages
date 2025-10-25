Package.Require("Config.lua")
Package.Require("Charactercreator.lua")
Package.Require("Scoreboard.lua")
Package.Require("Mainhud.lua")
Package.Require("Chat.lua")


Input.Register("ToggleNoclip", "B", "Toggle le noclip")
Input.Register("Scoreboard", "Tab", "Affiche le scoreboard")

Input.Bind("ToggleNoclip", InputEvent.Pressed, function()
    Events.CallRemote("ToggleNoclip")
end)

Character.Subscribe("HealthChange", function(character)
    UpdateHealth(character:GetHealth(), character:GetMaxHealth())
end)

Player.Subscribe("Spawn", function(self)
	UpdateScoreBoard(self)
    UpdatePlayerValuesMainHud(self)
end)
