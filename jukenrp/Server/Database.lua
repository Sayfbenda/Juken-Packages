local database = Database(DatabaseEngine.SQLite, "db=database_juken.db timeout=2")

database:Execute([[
	CREATE TABLE IF NOT EXISTS players (
		id INTEGER,
		name VARCHAR(100),
		steamid VARCHAR(100),
		permission VARCHAR(100),
		ip VARCHAR(100),
		charactersid VARCHAR(100)
	)
]])


database:Execute([[
	CREATE TABLE IF NOT EXISTS characters (
		id INTEGER,
		playersteamid VARCHAR(100),
		name VARCHAR(100),
		lastname VARCHAR(100),
		age INTEGER,
		grade VARCHAR(100)
	)
]])

function InsertNewPlayerToDB(player)
    local insertedplayer = database:Execute("INSERT INTO players VALUES (?, ?, ?, ?, ?, ?)", player:GetID(), player:GetName(), tostring(player:GetSteamID()), "none", player:GetIP(), "")
    return insertedplayer
end

function SelectPlayerInDB(player)
    local select = database:Select("SELECT * FROM players WHERE steamid = ?", player:GetSteamID())
    return select
end

function UpdatePlayerInDB(player)
    local updatedplayer = database:Execute("UPDATE players SET id = ?, name = ?, ip = ? WHERE steamid = ?", player:GetID(), player:GetName(), player:GetIP(), player:GetSteamID())
    return updatedplayer
end