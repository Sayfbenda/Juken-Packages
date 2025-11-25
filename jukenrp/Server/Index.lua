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