Package.Require("Database.lua")
Package.Require("DiscordConfig.lua")
Package.Require("Discord.lua")
Package.Require("Admin.lua")

Player.Subscribe("Spawn", function (self)

    UpdateDataBasePlayer(self)

end)


function UpdateDataBasePlayer(player)
    local selection = SelectPlayerInDB(player)
    if #selection > 0 then
        UpdatePlayerInDB(player)
    else
        InsertNewPlayerToDB(player)
    end
end

function CreateCharacter(player, name, lastname, genre)
    local character = Character(Vector(0, 0, 0), Rotator(0, 0, 0), "nanos-world::SK_Male")
    
    AddValuesToNewCharacter(character, name, lastname, genre)
    player:Possess(character)
    InsertCharacterToDB(player, character)
end


function SpawnCharacterByID(player, id)
    local character = Character(Vector(0, 0, 0), Rotator(0, 0, 0), "nanos-world::SK_Male")
    AddValuesToexesitingCharacter(character, GetCharacterbyID(id)[1])
    player:Possess(character)
end

function AddValuesToexesitingCharacter(character, values)
    character:SetValue("name", values["name"], true)
    character:SetValue("lastname", values["lastname"], true)
    character:SetValue("age", values["age"], true)
    character:SetValue("id", values["id"], true)
    character:SetValue("grade", values["grade"], true)
end

function AddValuesToNewCharacter(character, name, lastname, genre)
    character:SetValue("name", name, true)
    character:SetValue("lastname", lastname, true)
    character:SetValue("genre", genre, true)
    character:SetValue("id", GenerateNewID(), true)
    character:SetValue("age", 12, true)
    character:SetValue("grade", "GOAT", true)
end


function GenerateNewID()
    local select = GetAllCharacters()
    return #select + 1
end


Events.SubscribeRemote("AddValuesToexesitingCharacter", SpawnCharacterByID)

Events.SubscribeRemote("CreateCharacter", CreateCharacter)
