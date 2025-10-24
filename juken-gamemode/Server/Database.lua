local sqlite_db = Database(DatabaseEngine.SQLite, "db=database_juken.db timeout=2")

sqlite_db:Execute([[
	CREATE TABLE IF NOT EXISTS players (
		name VARCHAR(100),
		grade VARCHAR(100),
		steamid INTEGER,
		accountid INTEGER,
		ip INTEGER
	)
]])

function VerifiyExistingPlayer(player)
    local name = player:GetName()
    local steamID = player:GetSteamID()
    local accountID = player:GetAccountID()
    local playerIP = player:GetIP()
    local rows_filter = sqlite_db:Select("SELECT name FROM players WHERE name = :0", name)
    local verify = NanosTable.Dump(rows_filter)
    if (verify == "{}" ) then
        local affected_rows = sqlite_db:Execute("INSERT INTO players VALUES (:0, :1, :2, :3, :4)", name, "grade", steamID, accountID, playerIP)
        Console.Log("Le joueur a " .. name .. " été enregistré avec succés")
    else
        Console.Log("Le joueur : " .. name .. " est enregistré")
    end
end