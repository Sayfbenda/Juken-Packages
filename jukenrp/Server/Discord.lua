local headers = {
    Authorization = "Bot MTI3NjI0MzU4ODQzODU2MDgwMQ.GFzbhP.CZqGrSd5nl6s6uoDdQnFWadouMW3PBFzwWX2iE",
}

function SendToDiscord(message, channel)
    local json_data = JSON.stringify({ content = message })

    local ret = HTTP.Request("https://discord.com",
    "/api/v10/channels/" .. channel .. "/messages",
    HTTPMethod.POST,
    json_data,
    "application/json",
    false,
    headers)
end


function DiscordPlayerConnect(player)
    SendToDiscord(player:GetName() .. " a quitté le serveur", CHANNELS.join_disconnect)
end

Package.Export("SendToDiscord", SendToDiscord)