Package.Require("Config.lua")
Package.Require("SpellMenu.lua")

Input.Register("Lancer Spell", "RightMouseButton")
Input.Register("Menu Spells", "F4")
Input.Register("FirstSpell", "Ampersand")
Input.Register("SecondSpell", "E_AccentAigu")
Input.Register("ThirdSpell", 'Quote')
Input.Register("FourthSpell", "Apostrophe")
Input.Register("FifthSpell", "LeftParantheses")
Input.Register("SixthSpell", "Hyphen")

Input.Bind("FirstSpell", InputEvent.Pressed, function ()
    SepllHud:CallEvent("SelectKido", 0)
end)

Input.Bind("SecondSpell", InputEvent.Pressed, function ()
    SepllHud:CallEvent("SelectKido", 1)
end)

Input.Bind("ThirdSpell", InputEvent.Pressed, function ()
    SepllHud:CallEvent("SelectKido", 2)
end)

Input.Bind("FourthSpell", InputEvent.Pressed, function ()
    SepllHud:CallEvent("SelectKido", 3)
end)

Input.Bind("FifthSpell", InputEvent.Pressed, function ()
    SepllHud:CallEvent("SelectKido", 4)
end)

Input.Bind("SixthSpell", InputEvent.Pressed, function ()
    SepllHud:CallEvent("SelectKido", 5)
end)