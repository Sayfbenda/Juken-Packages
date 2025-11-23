local database = Database(DatabaseEngine.SQLite, "db=juken.db timeout=2")

database:Execute([[
    CREATE TABLE IF NOT EXISTS players (
		id INTEGER,
		name VARCHAR(255),
		steamid VARCHAR(100),
		ip VARCHAR(100),
		permission VARCHAR(100),
        charactersid VARCHAR(100)
	)
]])

database:Execute([[
    CREATE TABLE IF NOT EXISTS characters (
		id INTEGER,
		playersteamid VARCHAR(100),
		name VARCHAR(100),
		lastname VARCHAR(100),
		age VARCHAR(100),
		genre VARCHAR(100),
		grade VARCHAR(100)
	)
]])

function InsertPlayerToDB(player)
    local select = database:Select("SELECT * FROM players WHERE steamid = :0", tostring(player:GetSteamID()))
    if NanosTable.Dump(select) == "{}" then
        database:Execute("INSERT INTO players VALUES (?, ?, ?, ?, ?, ?)", 1, player:GetName(), tostring(player:GetSteamID()), tostring(player:GetIP()), GRADESPERMISSIONS[1].id,"0, 0, 0")
    else
        database:Execute("UPDATE players SET id = ?, name = ?, ip = ? WHERE steamid = ?", player:GetID(), tostring(player:GetName()), tostring(player:GetIP()), tostring(player:GetSteamID()))
    end
end

Events.SubscribeRemote("SelectCharactersFromSteamID", function (player)
    local select = SelectCharacterInDB(player:GetSteamID())
    Events.CallRemote("GetSelectedCharacters", player, player, select)
end)

function SelectHighestChracterID()
    local select = database:Select("SELECT id FROM characters ORDER BY id DESC")
    if #select == 0 then
        return 1
    end
    return NanosTable.Dump(select[1]["id"]+1)
end

function SelectCharacterInDB(steamid)
    local select = database:Select("SELECT * FROM characters WHERE playersteamid = ?", steamid)
    local characters = {}
    for index, value in ipairs(select) do
        table.insert(characters, value)
    end
    while #characters < 3 do
            table.insert(characters, "0")
    end
    return characters
end

function InsertCharacterToDB(name, lastname, age, genre, id, steamid, grade, characters)
    database:Execute("INSERT INTO characters VALUES (?, ?, ?, ?, ?, ?, ?)", id, steamid, name, lastname, age, genre, grade)
    SendToDiscord(tostring("Un nouveau personnage vient d'être crée : \n" ..
        "nom : " .. name .. 
        "\nNom de famille : " .. lastname .. 
        "\nAge : " .. age .. 
        "\nGenre : " .. genre ..
        "\nGrade : " .. grade),
        CHANNELS.newcharacter)
    UpdateCharacterInPlayerTable(steamid, id, characters)
end

function UpdateGradeCharacterInDB(id, grade)
    database:Execute("UPDATE characters SET grade = ? WHERE id = ?", grade, id)
end

function UpdateCharacterInPlayerTable(steamid, id, characters)
    local new_id_string = tostring(id) 
    
    local new_values_list = {}
    local slot_filled = false
    
    for index = 1, 3 do

        local current_value = characters[index]["id"] or "0"
        
        if current_value == "0" and not slot_filled then
            table.insert(new_values_list, new_id_string)
            slot_filled = true
        else
            table.insert(new_values_list, current_value)
        end
    end
    
    local result_string = table.concat(new_values_list, ", ")

    database:Execute("UPDATE players SET charactersid = ? WHERE steamid = ?", result_string, tostring(steamid))
end

function SelectGradeInDB(id)
    local select = database:Select("SELECT grade FROM characters WHERE id = ?", id)
    return select
end

function SelectAllCharacterInDB()
    local select = database:Select("SELECT * FROM characters")
    return select
end