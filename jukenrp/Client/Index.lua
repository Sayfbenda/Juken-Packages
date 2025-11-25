
MainHUD = WebUI(
"MainHUD",
"file://UI/index.html",
WidgetVisibility.Visible
)

Client.Subscribe("SpawnLocalPlayer", function (local_player)
    
    SetUpLocalPlayer(local_player)

end)

function SetUpLocalPlayer(local_player)
    local_player:Subscribe("Possess", function (player, character)
        UpdateLocalCharacter(character, player)
    end)
end

function UpdateLocalCharacter(character, player)
    
end