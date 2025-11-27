Events.SubscribeRemote("LunchSpell", function (id)
    local spell = GetSpellByID(id)
    if (not spell) then
        Console.log("Le spell n'existe pas")
        return
    end
    spell.lunch()
end)

function GetSpellByID(id)
    for index, value in ipairs(SPELLS) do
        if value.id == id then
            return value
        end
    end
    return nil
end