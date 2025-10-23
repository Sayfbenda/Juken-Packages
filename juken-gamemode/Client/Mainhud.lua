local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Hidden
)

Input.Bind("Mainhud", InputEvent.Pressed, function()
    Console.Log(tostring(mainhud:GetVisibility()))
end)