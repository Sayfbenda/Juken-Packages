Spell = {
    nom = "test",
    id = "test",
    image = "image",
    description = "test test",
    categorie = "test test",
    rang = "C",
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

local sho = Spell.new("hello", "SHO", "hello heloo", "../UI/modules/img/kisuke.jpeg", "C",function ()
    Console.Log("helloooooo")
end)

local sss = Spell.new("hello", "SSS", "description", "../UI/modules/img/kisuke.jpeg", "S",function ()
    Console.Log("helloooooo")
end)



SPELLS = {
    sho,
    sss
}