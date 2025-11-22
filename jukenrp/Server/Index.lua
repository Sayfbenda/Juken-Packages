Package.Require("Config.lua")
Package.Require("Database.lua")
Package.Require("Discord.lua")


Player.Subscribe("Spawn", function (self)
    InsertPlayerToDB(self)
end)

function Character:AddValues(values)
    self:SetValue("name", values["name"], true)
    self:SetValue("lastname", values["lastname"], true)
    self:SetValue("age", values["age"], true)
    self:SetValue("genre", values["genre"], true)
    local id = values["id"] or SelectHighestChracterID()
    self:SetValue("id", id, true)
end

Events.SubscribeRemote("CreateCharacter", function (self, player, values, index)
    local character = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Male")
    
    character:AddValues(values)

    SetGrade(character, character:GetValue("id"))

    self:Possess(character)


    VerifyCharactersLength(self:GetSteamID(), character, index)

end)


function VerifyCharactersLength(steamid, character, index)
    local characters = SelectCharacterInDB(steamid)
    
    if characters[index+1] == "0" then
        InsertCharacterToDB(
            character:GetValue("name"),
            character:GetValue("lastname"),
            tostring(character:GetValue("age")),
            character:GetValue("genre"),
            character:GetValue("id"), steamid,
            GRADES[1].id,
            characters
        )
    end
end

function SetGrade(character, id, grade)
    if grade == nil then
        grade = SelectGradeInDB(id)
        grade = grade[1]["grade"]

        local gradetable = GetGradeByID(grade)
        character:SetValue("grade", gradetable, true)
    end
end

function GetGradeByID(id)
    for _, grade in ipairs(GRADES) do
        if grade.id == id then
            Console.Log(NanosTable.Dump(grade))
            return grade
        end
    end
    return nil
end