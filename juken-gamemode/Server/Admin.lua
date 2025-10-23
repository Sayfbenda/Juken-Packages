Events.BroadcastRemote("ToggleNoclip", function (player)
    local character = player:GetControlledCharacter()
        character:SetFlyingMode(true)
end)