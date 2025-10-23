local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Hidden
)

Input.Bind("Mainhud", InputEvent.Pressed, function()
    if mainhud:GetVisibility() == 0 then
       mainhud:SetVisibility(WidgetVisibility.Visible)
    else
       mainhud:SetVisibility(WidgetVisibility.Hidden) 
    end
end)