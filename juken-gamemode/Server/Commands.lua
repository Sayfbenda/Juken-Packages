Chat.Subscribe("PlayerSubmit", function(message, player)
    AddGrade(message, player)
end)

function AddGrade(message, player)
    local steamid = player:GetSteamID()
    local grade = GRADES[tonumber(message)]
    if grade == nil then
       return 
    end
    UpdateGrade(player, steamid, grade)
end