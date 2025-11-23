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
Input.Register("DevTool", "P")

Input.Bind("DevTool", InputEvent.Pressed, function ()
    MainHUD:OpenDevTools()
end)

Input.Bind("MouseToggle", InputEvent.Pressed, function ()
    MouseToggle(Input.IsMouseEnabled())
    local player = Client.GetLocalPlayer()
    Events.CallRemote("ToggleNoClip", player)
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

    SetupLocalPlayer(local_player)

end)

function SetupLocalPlayer(local_player)
    local_player:Subscribe("Possess", function (player, character)
        UpdateCharacterValues(character)
    end)
end

function UpdateCharacterValues(character)
    if character == nil then
        return
    end
    character:Subscribe("HealthChange", OnCharacterHealthChange)
end

function OnCharacterHealthChange(character, old_health, new_health)
    UpdateHealth(new_health, character:GetMaxHealth())
end

function UpdateHealth(new_health, hpmax)
    MainHUD:CallEvent("ChangeHealOnMenu", new_health, hpmax)
end

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

