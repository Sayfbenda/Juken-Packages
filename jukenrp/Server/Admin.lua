function ToggleNoclip(player)
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end
    if character:GetFlyingMode() then
       character:SetFlyingMode(false)
    else
        character:SetFlyingMode(true)
    end
end

Events.SubscribeRemote("ToggleNoclip", ToggleNoclip)