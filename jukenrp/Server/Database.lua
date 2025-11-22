local database = Database(DatabaseEngine.SQLite, "db=juken.db timeout=2")

database:Execute([[
    CREATE TABLE IF NOT EXISTS players (
		id INTEGER,
		name VARCHAR(255),
		steamid VARCHAR(100),
		ip VARCHAR(100),
        charactersid VARCHAR(100)
	)
]])

database:Execute([[
    CREATE TABLE IF NOT EXISTS characters (
		id INTEGER,
		playersteamid INTEGER,
		grade VARCHAR(100)
	)
]])

function InsertPlayerToDB(player)
    local select = database:Select("SELECT * FROM players WHERE steamid = :0", tostring(player:GetSteamID()))
    if NanosTable.Dump(select) == "{}" then
        database:Execute("INSERT INTO players VALUES (?, ?, ?, ?, ?)", 1, player:GetName(), tostring(player:GetSteamID()), tostring(player:GetIP()), "0, 0, 0")
    else
        database:Execute("UPDATE players SET id = ?, name = ?, ip = ? WHERE steamid = ?", player:GetID(), tostring(player:GetName()), tostring(player:GetIP()), tostring(player:GetSteamID()))
    end
end

Events.SubscribeRemote("SelectCharactersFromSteamID", function (player)
    local select = database:Select("SELECT charactersid FROM players WHERE steamid = :0", tostring(player:GetSteamID()))
    local characters_string = select[1]["charactersid"]
    local characters_table = {}
    for char_id_string in characters_string:gmatch("(%d+)") do
        table.insert(characters_table, tonumber(char_id_string))
    end

    Events.CallRemote("GetSelectedCharacters", player, player, characters_table)
end)