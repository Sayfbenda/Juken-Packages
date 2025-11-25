ITEM = {
    nom = "nom de l'item",
    id = "ITEM",
    image = "",

}

function ITEM.new(nom, id, image)
    local self = setmetatable({}, ITEM)

    self.nom = nom
    self.id = id
    self.image = image
    
end

local pomme = ITEM("pomme", "POMME", "")