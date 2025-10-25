Chat.Subscribe("PlayerSubmit", function(message, player)
    AddGrade(message, player)
end)

function AddGrade(message, player)
    local name = player:GetName()
    local grade = GRADES[tonumber(message)]
    UpdateGrade(name, grade)
end