local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Visible
)

function UpdateHealth(health)
    mainhud:CallEvent("UpdateHealth", health)
end


Events.Subscribe("Update", function ()
    local player = Client.GetLocalPlayer()
    if (not player) then
        return
    end
    
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end
    local rotator = character:GetControlRotation()
    local yaw_value = string.match(tostring(rotator), "Yaw%s*=%s*([%d%.%-]+)")
    mainhud:CallEvent("UpdateCardinalBar", yaw_value)
end)
