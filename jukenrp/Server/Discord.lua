local headers = {
    Authorization = "Bot ",
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
	SendToDiscord(player:GetName() .. " s'est connecté au serveur", CHANNELS.join_disconnect)
end

Package.Export("SendToDiscord", SendToDiscord)