function GetAllPlayers()
    return Player.GetAll()
end

function GetAllPlayersName()
    local names = {}
    for index, value in ipairs(GetAllPlayers()) do
        names[index] = value:GetName()
    end
    return names
end

Player.Subscribe("Spawn", function (self)
    MainHUD:CallEvent("GetAllPlayers", NanosTable.Dump(GetAllPlayersName()))
end)