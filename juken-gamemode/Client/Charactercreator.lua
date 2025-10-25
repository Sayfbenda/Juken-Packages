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
    Console.Log(player:GetName())
    Console.Log(playernom)
    Console.Log(playerprenom)
    Console.Log(playerage)
    Console.Log(skin)
    Console.Log(type(playernom))
    Events.CallRemote("SetPlayerValuesCharacter", playernom, playerprenom, playerage, skin)
end)

function GetSkinsLength()
    local length = #SKINS
    charactercreator:CallEvent("SetSkinLength", length)
end

