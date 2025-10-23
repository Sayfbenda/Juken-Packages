local scoreboard = WebUI(
    "ScoreBard",
    "file://UI/leaderboard/index.html",
    WidgetVisibility.Hidden
)

Input.Bind("Scoreboard", InputEvent.Pressed, function()
    if scoreboard.GetVisibility == 1 then
        scoreboard:SetVisibility(0)
    else
        scoreboard:SetVisibility(1)
    end
end)

