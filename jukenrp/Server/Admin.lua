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

function SetCharacterLocation(character, coords)
    character:SetLocation(Vector(coords))
end

Events.SubscribeRemote("SetCharacterLocation", SetCharacterLocation)
Events.SubscribeRemote("ToggleNoclip", ToggleNoclip)