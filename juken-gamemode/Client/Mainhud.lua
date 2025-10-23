local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Hidden
)

Input.Bind("Mainhud", InputEvent.Pressed, function()
    if mainhud.GetVisibility == 1 then
        mainhud:SetVisibility(0)
    else
        mainhud:SetVisibility(1)
    end
end)