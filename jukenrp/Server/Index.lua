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
    
    self:Possess(character)

    character:AddValues(values)


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
            "noob",
            characters
        )
    end
end