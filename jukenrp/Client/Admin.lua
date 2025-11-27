Input.Bind("ToggleAdminMenu", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleAdminMenu")
end)


Events.SubscribeRemote("AddCharactersToAdminMenu", function (characters)
    MainHUD:CallEvent("AddCharactersToAdminMenu", characters)
end)

Input.Bind("ToggleNoclip", InputEvent.Pressed, function ()
    Events.CallRemote("ToggleNoclip")
end)

MainHUD:Subscribe("ToggleNoclipWithAdminMenu", function ()
    Events.CallRemote("ToggleNoclip")
end)