Package.Require("Scoreboard.lua")
Package.Require("Mainhud.lua")

local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Visible
)

Input.Register("ToggleNoclip", "B", "Toggle le noclip")
Input.Register("Scoreboard", "Tab", "Affiche le scoreboard")

Input.Bind("ToggleNoclip", InputEvent.Pressed, function()
    Events.CallRemote("ToggleNoclip")
end)

function UpdateHealth(health)
    mainhud:CallEvent("UpdateHealth", health)
end

function UpdateScoreBoard(player)
    
end

Character.Subscribe("HealthChange", function(character)
    UpdateHealth(character:GetHealth())
end)