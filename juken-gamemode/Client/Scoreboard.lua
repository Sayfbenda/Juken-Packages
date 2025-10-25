local scoreboard = WebUI(
    "ScoreBard",
    "file://UI/scoreboard/index.html",
    WidgetVisibility.Hidden
)

Input.Bind("Scoreboard", InputEvent.Pressed, function()
    if scoreboard:GetVisibility() == 1 then
        scoreboard:SetVisibility(0)
    else
        scoreboard:SetVisibility(1)
    end
end)


function UpdateScoreBoard(self)
    local icon = self:GetAccountIconURL()
    local nom = self:GetName()
    local fight = 0
    local ping = self:GetPing()
    scoreboard:CallEvent("UpdateScoreBoard", icon, nom, fight, ping)
end

