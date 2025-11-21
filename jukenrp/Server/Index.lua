Package.Require("Database.lua")
Package.Require("Discord.lua")


Player.Subscribe("Spawn", function (self)
    InsertPlayerToDB(self)
end)