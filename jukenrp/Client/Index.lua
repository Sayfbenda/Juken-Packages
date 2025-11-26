MainHUD = WebUI(
"MainHUD",
"file://UI/index.html",
WidgetVisibility.Visible
)

Input.Register("ToggleCursor", "C")
Input.Register("DevConsole", "P")
Input.Register("ToggleNoclip", "B")
Input.Register("ToggleAdminMenu", "F1")

Package.Require("Admin.lua")
Package.Require("Characterui.lua")

Input.Bind("ToggleNoclip", InputEvent.Pressed, function ()
    Events.CallRemote("ToggleNoclip")
end)

Input.Bind("DevConsole", InputEvent.Pressed, function ()
    MainHUD:OpenDevTools()
end)

Input.Bind("ToggleCursor", InputEvent.Pressed, function ()
    ToggleMouseEnabled()
end)



Client.Subscribe("SpawnLocalPlayer", function (local_player)

    Events.CallRemote("CharactersForchooserMenu", local_player)
    
    SetUpLocalPlayer(local_player)

end)

Player.Subscribe("Spawn", function (self)
    MainHUD:CallEvent("AddPlayerToAdminMenu", self:GetName(), self:GetAccountName(),self:GetSteamID(), self:GetAccountID(), self:GetID())
end)

Events.SubscribeRemote("GetCharactersForChooser", function (characters)
    MainHUD:CallEvent("AddCharactersTochooser", characters)
end)


function SetUpLocalPlayer(local_player)

    local_player:Subscribe("Possess", function (player, character)
        UpdateLocalCharacter(player, character)
        character:Subscribe("HealthChange", UpdateHealth)
    end)

    MainHUD:Subscribe("CreateCharacterByCreator", function (name, lastname, genre)
        Events.CallRemote("CreateCharacter", name, lastname, genre)
    end)

    MainHUD:Subscribe("ChooseCharacter", function (id)
        Events.CallRemote("AddValuesToexesitingCharacter", id)
    end)

    Events.CallRemote("GetCharactersForAdminMenu", local_player)
end

function UpdateLocalCharacter(player, character)
    MainHUD:CallEvent("SetValuesToPlayerUi", player:GetAccountIconURL(), character:GetValue("name"), character:GetValue("lastname"), character:GetMaxHealth(), 10, character:GetValue("grade"))
end

function UpdateHealth(self, old_health, new_health)
    MainHUD:CallEvent("UpdateHealthPlayerUI", new_health, self:GetMaxHealth())
end


function ToggleMouseEnabled()
    if Input.IsMouseEnabled() then
        Input.SetMouseEnabled(false)
    else
        Input.SetMouseEnabled(true)
    end
    
end

