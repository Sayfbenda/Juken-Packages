Spell = {}

function Spell.new(name, id, image, categorie, description, lunch)
    local self = setmetatable({}, Spell)

    self.name = name
    self.id = id
    self.image = image
    self.categorie = categorie
    self.description = description
    self.lunch = lunch

end

local spelldev = Spell(
"Spell Dev",
"SPELLDEV", 
"", 
"C", 
"ceci est une description",
function ()
        
end)