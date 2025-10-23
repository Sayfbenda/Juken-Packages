local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Visible
)

function UpdateHealth(health)
    mainhud:CallEvent("UpdateHealth", health)
end