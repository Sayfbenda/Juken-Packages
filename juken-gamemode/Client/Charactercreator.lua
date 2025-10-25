local charactercreator = WebUI(
    "ScoreBard",
    "file://UI/charactercreator/index.html",
    WidgetVisibility.Hidden
)

Events.SubscribeRemote("OpenCharacterCreator", function (visibility)
    charactercreator:SetVisibility(visibility)
    charactercreator:BringToFront()
    Input.SetInputEnabled(true)
end)


function GetSkinsLength()
    local length = #SKINS
    charactercreator:CallEvent("SetSkinLength", length)
end

GetSkinsLength()

