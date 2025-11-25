MainHUD:Subscribe("DisplayCharacterChooserMenu", function ()
    MainHUD:CallEvent("ToggleCharacterChooser")
end)

MainHUD:Subscribe("DisplayCharacterCreator", function ()
    MainHUD:CallEvent("ToggleCharacterCreator")
end)