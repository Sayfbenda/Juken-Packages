Input.Bind("ToggleAdminMenu", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleAdminMenu")
end)


Events.SubscribeRemote("AddCharactersToAdminMenu", function (characters)
    MainHUD:CallEvent("AddCharactersToAdminMenu", characters)
end)