Package.Require("Config.lua")
Package.Require("Database.lua")
Package.Require("Admin.lua")
Package.Require("Discord.lua")


Player.Subscribe("Spawn", function (self)
    InsertPlayerToDB(self)
end)

function Character:AddValues(values, grade)
    self:SetValue("name", values["name"], true)
    self:SetValue("lastname", values["lastname"], true)

    self:SetValue("age", values["age"], true)
    self:SetValue("genre", values["genre"], true)
    local id = values["id"] or SelectHighestChracterID()
    self:SetValue("id", id, true)
    self:SetValue("permission", OWNER, true)
end

function Character:SetHealthAndReiatsu(grade)
    self:SetMaxHealth(grade["hpmax"])
    self:SetHealth(grade["hpmax"])
end

Events.SubscribeRemote("CreateCharacter", function (self, player, values, index)
    local character = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Male")

    character:AddValues(values, character:GetValue("grade"))
    
    local grade = SelectGradeInDB(character:GetValue("id"))
    
    if #grade == 0 then
        SetGrade(character)
    else
        SetGrade(character, grade)
    end

    character:SetHealthAndReiatsu(character:GetValue("grade"))

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

function SetGrade(character, grade, id)
    if character == nil then
        character = GetCharacterByID(id)
        grade = GetGradeByID(grade)
        if grade == nil then
            return
        end
        character:SetValue("grade", grade, true)
        UpdateGradeCharacterInDB(id, grade["id"])
        Console.Log(NanosTable.Dump(character:GetValue("grade")))
    elseif grade == nil then
        grade = GetGradeByID(GRADES[1]["id"])
        character:SetValue("grade", grade, true)
    else
        grade = GetGradeByID(grade[1]["grade"])
        character:SetValue("grade", grade, true)
    end
end



function GetCharacterByID(id)
    for index, value in ipairs(Character.GetAll()) do
        if value:GetValue("id") == id then
            Console.Log("HIHII")
            return value
        end
    end
end

function GetGradeByID(id)
    for _, grade in ipairs(GRADES) do
        if grade.id == id then
            return grade
        end
    end
    return nil
end

Chat.Subscribe("PlayerSubmit", function(message, player)
	local character = player:GetControlledCharacter()
    SetGrade(nil, message, character:GetValue("id"))
end)

Events.SubscribeRemote("RevivePlayer", function (player)
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end

    if (not character:IsDead()) then
        return
    end

    character:Respawn(character:GetLocation(), character:GetRotation())
end)


Events.SubscribeRemote("SelectAllCharacterInDB", function (player)
    Events.CallRemote("GetAllCharacterInDB", player, SelectAllCharacterInDB())
end)    

