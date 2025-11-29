Spell = {}

function Spell.new(name, id, image, categorie, description, lunch)
    local self = setmetatable({}, Spell)

    self.name = name
    self.id = id
    self.image = image
    self.categorie = categorie
    self.description = description
    self.lunch = lunch

    return self
end

Spelldev = Spell.new(
"Spell Dev",
"SPELLDEV", 
"./modules/assets/spellimages/test.png", 
"C", 
"ceci est une description",
function ()
    local prop = Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_Crate_07")
end)



SPELLS = {
    Spelldev
}