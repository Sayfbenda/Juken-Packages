Events.SubscribeRemote("ToggleNoClip", function (player)
    
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end

    if character:GetValue("permission").permission == false then
        return
    end

    if character:GetFlyingMode() then
        character:SetFlyingMode(false)
    else
        character:SetFlyingMode(true)
    end
    

end)

Events.SubscribeRemote("KickAll", function (player)
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end
    if character:GetValue("permission").permission == false then
        return
    end
    for index, value in ipairs(Player.GetAll()) do
        value:Kick("Kicked By : " .. player:GetName())
    end
end)