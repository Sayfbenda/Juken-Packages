Input.Register("ToggleNoClip", "B")
Input.Register("ToggleAdminMenu", "F1")

Input.Bind("ToggleNoClip", InputEvent.Pressed, function ()
    Events.CallRemote("ToggleNoClip")
end)

Input.Bind("ToggleAdminMenu", InputEvent.Pressed, function ()
    local player = Client.GetLocalPlayer()
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end
    if character:GetValue("permission").permission == false then
        return
    end
    MainHUD:CallEvent("ToggleAdminMenu")
    
end)

MainHUD:Subscribe("KickallFromJS", function ()
    Events.CallRemote("KickAll")
end)

MainHUD:Subscribe("ToggleNoClipFromJS", function ()
    Events.CallRemote("ToggleNoClip")
end)

MainHUD:Subscribe("ReviveFromMenu", function ()
    Events.CallRemote("RevivePlayer")
end)