Events.BroadcastRemote("ToggleNoclip", function (player)
    local character = player:GetControlledCharacter()
    if (not character) then return end

    if character:GetFlyingMode() == true then
        character:SetFlyingMode(false)
    else
        character:SetFlyingMode(true)
    end
end)