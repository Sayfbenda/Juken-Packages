local sqlite_db = Database(DatabaseEngine.SQLite, "db=database_juken.db timeout=2")

sqlite_db:Execute([[
	CREATE TABLE IF NOT EXISTS players (
		name VARCHAR(100),
		age VARCHAR(100),
		grade VARCHAR(100),
		steamid VARCHAR(100),
		accountid VARCHAR(100),
		ip VARCHAR(100)
	)
]])

function VerifiyExistingPlayer(player)
    local steamID = player:GetSteamID()
    local rows_filter = sqlite_db:Select("SELECT steamid FROM players WHERE steamid = :0", steamID)
    local verify = NanosTable.Dump(rows_filter)
    if (verify == "{}" ) then
        local name = player:GetName()
        local age = "20"
        local grade = "GRADE"
        local accountID = tostring(player:GetAccountID())
        local playerIP = tostring(player:GetIP())
        InsertPlayerInDB(name, age, grade, steamID, accountID, playerIP)
    else
        Console.Log("Le joueur : " .. steamID .. " est enregistré")
    end
end

function InsertPlayerInDB(name, age, grade, steamID, accountID, playerIP)
    sqlite_db:Execute("INSERT INTO players VALUES (:0, :1, :2, :3, :4 ,:5)", name, age, grade.id, steamID, accountID, playerIP)
    Console.Log("Le joueur a " .. name .. " été enregistré avec succés")
end