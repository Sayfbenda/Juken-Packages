local database = Database(DatabaseEngine.SQLite, "juken_database.db timeout=2")

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



function InsertNewPlayerToDB(player)
    database:Execute("INSERT INTO players VALUES (?, ?, ?, ?, ?, ?)", player:GetID(), player:GetName(), tostring(player:GetSteamID()), "none", player:GetIP(), "")
end