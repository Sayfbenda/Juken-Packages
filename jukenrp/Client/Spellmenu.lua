Input.Bind("ToggleSpellMenu", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleSpellMenu")
end)

MainHUD:Subscribe("LunchSpellWithID", function (id)
    Events.CallRemote("LunchSpell", Client.GetLocalPlayer(), id)
end)

Input.Bind("LunchSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("LunchSpellWithSpellMenu")
end)

Input.Bind("FirstSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("SelectSpell", 0)
end)

Input.Bind("SecondSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("SelectSpell", 1)
end)

Input.Bind("ThirdSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("SelectSpell", 2)
end)

Input.Bind("FourthSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("SelectSpell", 3)
end)

Input.Bind("FifthSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("SelectSpell", 4)
end)

Input.Bind("SixthSpell", InputEvent.Pressed, function ()
    MainHUD:CallEvent("SelectSpell", 5)
end)


