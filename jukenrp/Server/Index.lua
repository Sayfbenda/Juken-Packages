Package.Require("Database.lua")

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
    player:Possess(character)
end

Events.SubscribeRemote("CreateCharacter", CreateCharacter)