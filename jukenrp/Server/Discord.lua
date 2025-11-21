local headers = {
    Authorization = "Bot",
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

Chat.Subscribe("PlayerSubmit", function(message, player)
	SendToDiscord(player:GetName() .. " : " .. message, CHANNELS.chat)
end)

Character.Subscribe("ValueChange", function(self, key, value)
    if self:GetPlayer() == nil then
        Console.Log("aaaa")
        return
    end
    local player = self:GetPlayer()
    local name = player:GetName()
    if type(value) == "table" and key == "grade" then
        value = value.nom
    end
	SendToDiscord("La valuer " .. key .. " a été modifié sur le joueur " .. name .. " nouvelle valeur : " .. tostring(value), CHANNELS.values)
end)

Package.Export("SendToDiscord", SendToDiscord)