local charactercreator = WebUI(
    "ScoreBard",
    "file://UI/charactercreator/index.html",
    WidgetVisibility.Hidden
)

Events.SubscribeRemote("OpenCharacterCreator", function (visibility)
    charactercreator:SetVisibility(visibility)
    charactercreator:BringToFront()
    Input.SetMouseEnabled(true)
    GetSkinsLength()
end)

charactercreator:Subscribe("GetValues", function (playernom, playerprenom, playerage, skin)
    local player = Client.GetLocalPlayer()
    Events.CallRemote("SetPlayerValuesCharacter", playernom, playerprenom, playerage, skin)
end)

function GetSkinsLength()
    local length = #SKINS
    charactercreator:CallEvent("SetSkinLength", length)
end

