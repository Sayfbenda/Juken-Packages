Events.SubscribeRemote("LunchSpell", function (player, id)
    local spell = GetSpellByID(id)
    if (spell == nil) then
        Console.Log("Le spell n'existe pas")
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