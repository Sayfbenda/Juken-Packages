Item = {}

function Item.new(name, id, description, effect)
    local self = setmetatable({}, Item)

    self.name = name
    self.id = id
    self.description = description
    self.effect = effect

    return self
end

local pomme = Item("pomme", "POMME", "pommepomme", function ()
    Console.log("Une pomme a été mangée")
end)