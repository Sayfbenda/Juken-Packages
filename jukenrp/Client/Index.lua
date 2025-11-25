MainHUD = WebUI(
"MainHUD",
"file://UI/index.html",
WidgetVisibility.Visible
)

Input.Register("ToggleCursor", "C")

Package.Require("Characterui.lua")


Input.Bind("ToggleCursor", InputEvent.Pressed, function ()
    ToggleMouseEnabled()
end)



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



function ToggleMouseEnabled()
    if Input.IsMouseEnabled() then
        Input.SetMouseEnabled(false)
    else
        Input.SetMouseEnabled(true)
    end
    
end