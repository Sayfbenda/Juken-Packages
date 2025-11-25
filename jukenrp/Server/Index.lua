Package.Require("Database.lua")

Player.Subscribe("Spawn", function (self)

    UpdateDataBasePlayer(self)

    local character = Character(Vector(0, 0, 0), Rotator(0, 0, 0), "nanos-world::SK_Male")



end)


function UpdateDataBasePlayer(Player)
    
end