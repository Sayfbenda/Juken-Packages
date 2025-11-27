Input.Bind("ToggleSpellMenu", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleSpellMenu")
end)

MainHUD:Subscribe("LunchSpellWithID", function (id)
    Events.CallRemote("LunchSpell", Client.GetLocalPlayer(), id)
end)

Input.Bind("LunchSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("LunchSpellWithSpellMenu")
end)
