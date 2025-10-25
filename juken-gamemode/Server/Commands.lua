Chat.Subscribe("PlayerSubmit", function(message, player)
    AddGrade(message, player)
end)

function AddGrade(message, player)
    local name = player:GetName()
    local grade = GRADES[tonumber(message)]
    if grade == nil then
       return 
    end
    UpdateGrade(name, grade)
end