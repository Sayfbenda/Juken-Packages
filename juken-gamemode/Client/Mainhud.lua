local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Visible
)

function UpdateHealth(health, healthmax)
    mainhud:CallEvent("UpdateHealth", health, healthmax)
end

Events.SubscribeRemote("UpdatePlayerValuesMainHud", function (self)
    UpdatePlayerValuesMainHud(self)
end)

function UpdatePlayerValuesMainHud(self)
    local character = self:GetControlledCharacter()
    if (not character) then
        return
    end
    local image = self:GetAccountIconURL()
    local name = self:GetName()
    local health = character:GetHealth()
    local healthmax = character:GetMaxHealth()
    local energy = character:GetValue("energymax")
    local energymax = character:GetValue("energymax") 
    mainhud:CallEvent("UpdatePlayerValues", image, name, health, healthmax, energy, energymax)
end

function UpdateCardinalBar()
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
end

Client.Subscribe("Tick", UpdateCardinalBar)
Package.Export("UpdatePlayerValuesMainHud", UpdatePlayerValuesMainHud)