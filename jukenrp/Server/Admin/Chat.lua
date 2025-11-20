Chat.Subscribe("PlayerSubmit", function(message, player)
    if string.sub(message, 1, 1) == "/" then
        CommandeManager(message, player)
    end
end)

local function splitString(inputstr, sep)
    if sep == nil then sep = "%s" end
    local t = {}
    for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
        table.insert(t, str)
    end
    return t
end

function CommandeManager(message, player)
    local messageClean = string.sub(message, 2)

    local args = splitString(messageClean, " ")
    local commandName = table.remove(args, 1):lower()
    Console.Log(NanosTable.Dump(args))
    if COMMANDS[commandName] then
        COMMANDS[commandName](args)
    else
        Chat.BroadcastMessage("Commande inexistante")
    end
end