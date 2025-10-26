Input.Subscribe("KeyDown", function (key_name, delta)
    if key_name == "Ampersand" then
        local local_player = Client.GetLocalPlayer()
        Events.CallRemote("LancerSpell", local_player, local_player)
    end
end)