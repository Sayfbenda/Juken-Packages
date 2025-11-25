Spell = {
    nom = "test",
    id = "test",
    image = "image",
    description = "test test",
    categorie = "test test",
    rang = "C",
    cooldown = 0,
    damage = 0,
    reiatsucost = 0,
    heal = 0,
    asset = "",
    hitbox = 0,
    velocity = 0,
    execute = function ()
        
    end
}

function Spell.new(nom, id, description, image, rang, func)
    local self = setmetatable({}, Spell)
    
    self.nom = nom
    self.id = id
    self.description = description
    self.image = image
    self.rang = rang
    self.execute = func

    return self
end

local byakurai = Spell.new(
"Byakurai",
"BYAKURAI",
"Un éclair blanc qui transperce la cible",
"../UI/modules/img/byakurai.png", 
"C",
function ()
    Console.Log("helloooooo")
end)

local sss = Spell.new("hello", "SSS", "description", "../UI/modules/img/kisuke.jpeg", "S",function ()
    Console.Log("helloooooo")
end)



SPELLS = {
    byakurai,
    sss
}