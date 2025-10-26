Input.Subscribe("KeyDown", function (key_name, delta)
    if key_name == "Ampersand" then
        local player = Client.GetLocalPlayer()
        local playerrotation = player:GetCameraRotation()
        local character = player:GetControlledCharacter()
        Events.CallRemote("LunchSpell",character, playerrotation)
    end
end)