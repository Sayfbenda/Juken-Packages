local database = Database(DatabaseEngine.SQLite, "db=juken.db timeout=2")

database:Execute([[
    CREATE TABLE IF NOT EXISTS players (
		id INTEGER,
		name VARCHAR(100),
		steamid VARCHAR(100),
		ip VARCHAR(100)
	)
]])

database:Execute([[
    CREATE TABLE IF NOT EXISTS characters (
		id INTEGER,
		playerid INTEGER,
		grade VARCHAR(100)
	)
]])

function InsertPlayerToDB(player)
    local select = database:Select("SELECT * FROM players WHERE steamid = :0", tostring(player:GetSteamID()))
    if NanosTable.Dump(select) == "{}" then
        Console.Log("le Goat")
    end
end