Package.Require("CharacterCreator.lua")

MainHUD = WebUI(
    "MainHud",
    "file://UI//index.html",
    WidgetVisibility.Visible
)

Input.Register("MouseToggle", "C")

Input.Bind("MouseToggle", InputEvent.Pressed, function ()
    MouseToggle(Input.IsMouseEnabled())
end)

function MouseToggle(isToggle)
    if isToggle then
        Input.SetMouseEnabled(false)
    else
        Input.SetMouseEnabled(true)
    end
end



