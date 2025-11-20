Package.Require("Chat.lua")

COMMANDS = {
    grade = function(args)
        for index, value in pairs(Player.GetAll()) do
            for key, v in pairs(args) do
                Console.Log(v)
            end
            if tostring(value:GetID()) == args[1] then
                local character = value:GetControlledCharacter()
                local grade = GetGradeFromName(args[2])
                if grade == false then
                    Chat.BroadcastMessage("Grade inexistant")
                    return
                end
                ChangeCharacterGrade(value, grade)
                Console.Log("test")
            end
        end
    end
}

function GetGradeFromName(gradename)
    gradename = gradename:upper(gradename)
    for key, value in pairs(GRADES) do
        if value.id == gradename then
            Console.Log(NanosTable.Dump(GRADES[key]))
            return GRADES[key]
        end
    end
    return false
end

function ChangeCharacterGrade(player, grade)
    local character = player:GetControlledCharacter()
    character:SetValue("grade", grade, true)
     ChangeGradeInDB(grade.id, player:GetSteamID())
end

Package.Export("ChangeCharacterGrade", ChangeCharacterGrade)