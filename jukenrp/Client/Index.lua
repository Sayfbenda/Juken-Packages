MainHUD = WebUI(
    "MainHud",
    "file://UI//index.html",
    WidgetVisibility.Visible
)

Package.Require("CharacterCreator.lua")
Package.Require("DiscordConfig.lua")


MainHUD:BringToFront()

Input.Register("MouseToggle", "C")

Input.Bind("MouseToggle", InputEvent.Pressed, function ()
    MouseToggle(Input.IsMouseEnabled())
    MainHUD:CallEvent("ToggleCharacterCreator")
end)

Player.Subscribe("Spawn", function (self)
    Events.CallRemote("SendToDiscord", tostring((self:GetName() .. " s'est connecté au serveur")), CHANNELS.join_disconnect)
end)


function MouseToggle(isToggle)
    if isToggle then
        Input.SetMouseEnabled(false)
    else
        Input.SetMouseEnabled(true)
    end
end

