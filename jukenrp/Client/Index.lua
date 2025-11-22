MainHUD = WebUI(
    "MainHud",
    "file://UI//index.html",
    WidgetVisibility.Visible
)

Package.Require("CharacterCreator.lua")
Package.Require("DiscordConfig.lua")


MainHUD:BringToFront()

Input.Register("MouseToggle", "C")
Input.Register("TTTT", "Tab")

Input.Bind("MouseToggle", InputEvent.Pressed, function ()
    MouseToggle(Input.IsMouseEnabled())
end)


Input.Bind("TTTT", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleCharacterCreator")
end)

Client.Subscribe("SpawnLocalPlayer", function (local_player)

    Events.CallRemote("SendToDiscord", tostring((local_player:GetName() .. " s'est connecté au serveur")), CHANNELS.join_disconnect)

    MainHUD:CallEvent("ToggleClickOnSpawn")


    MainHUD:Subscribe("ClickedOnspanw", function ()
        Events.CallRemote("SelectCharactersFromSteamID", local_player)
        MainHUD:CallEvent("ToggleCharacterCreator")
    end)

end)

Events.SubscribeRemote("GetSelectedCharacters", function (player, select)
    MainHUD:CallEvent("AddCharacters", NanosTable.Dump(player), player:GetSteamID(), select)
end)

function MouseToggle(isToggle)
    if isToggle then
        Input.SetMouseEnabled(false)
    else
        Input.SetMouseEnabled(true)
    end
end

