Input.Register("ToggleNoClip", "B")

Input.Bind("ToggleNoClip", InputEvent.Pressed, function ()
    Events.CallRemote("ToggleNoClip")
end)

MainHUD:Subscribe("KickallFromJS", function ()
    Events.CallRemote("KickAll")
end)