MainHUD = WebUI(
    "MainHud",
    "file://UI//index.html",
    WidgetVisibility.Visible
)

Package.Require("Config.lua")
Package.Require("Spells.lua")
Package.Require("CharacterCreator.lua")
Package.Require("Admin.lua")
Package.Require("DiscordConfig.lua")
Package.Require("Inventaire.lua")


MainHUD:BringToFront()

Input.Register("MouseToggle", "C")
Input.Register("TTTT", "Tab")
Input.Register("DevTool", "P")
Input.Register("SpellMenu", "F4")

Input.Bind("SpellMenu", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleMenuSpell")
end)

Input.Bind("DevTool", InputEvent.Pressed, function ()
    MainHUD:OpenDevTools()
end)

Input.Bind("MouseToggle", InputEvent.Pressed, function ()
    MouseToggle(Input.IsMouseEnabled())
end)


Input.Bind("TTTT", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleCharacterCreator")
end)

Client.Subscribe("SpawnLocalPlayer", function (local_player)

    Events.CallRemote("SendToDiscord", tostring((local_player:GetName() .. " s'est connecté au serveur")), CHANNELS.join_disconnect)
    
    Events.CallRemote("SelectCharactersFromSteamID", local_player)
    MainHUD:CallEvent("ToggleClickOnSpawn")

    MainHUD:Subscribe("ClickedOnspanw", function ()
        MainHUD:CallEvent("ToggleCharacterCreator")
    end)
    MainHUD:CallEvent("AddSpellsTolist", SPELLS)
    MainHUD:CallEvent("AddSpellsToleftPart", SPELLS)

    SetupLocalPlayer(local_player)
    MainHUD:CallEvent("SetPermissionsArray", GRADESPERMISSIONS)
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

Player.Subscribe("Spawn", function (self)
    
    UpdatePlayersAdminMenu(Player.GetAll())

    Events.CallRemote("SelectAllCharacterInDB")

end)

Events.SubscribeRemote("GetAllCharacterInDB", function (characters)
    MainHUD:CallEvent("GetCharatersbyDB", characters)
end)

function UpdatePlayersAdminMenu(playersrow)
    local playerstable = {}

    for index, value in ipairs(playersrow) do
        table.insert(playerstable, {
            name = value:GetName(),
            steamid = value:GetSteamID(),
            id = value:GetID()
        })
    end
    MainHUD:CallEvent("UpdatePlayersAdminMenu", playerstable)
end

function GetCharacterCoords(character)
    return false
end

MainHUD:Subscribe("GetCharacterLocation", function ()
    local player = Client.GetLocalPlayer()
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end
    MainHUD:CallEvent("UpdateCoordsInMenu", tostring(character:GetLocation()))
end)