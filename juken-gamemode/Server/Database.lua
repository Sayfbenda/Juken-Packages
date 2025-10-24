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
    local rows_filter = sqlite_db:Select("SELECT name FROM players WHERE name = :0", name)
    local verify = NanosTable.Dump(rows_filter)
    local steamID = player:GetSteamID()
    local accountID = player:GetAccountID()
    local playerIP = player:GetIP()
    local character = player:GetControlledCharacter()
    character:SetValue("grade", GENIN ,true)
    local grade = character:GetValue("grade")
    if (verify == "{}" ) then
        Console.Log("Le joueur a " .. name .. " été enregistré avec succés")
        InsertPlayerInDB(name, grade, steamID, accountID, playerIP)
    else
        Console.Log("Le joueur : " .. name .. " est enregistré")
    end
end

function InsertPlayerInDB(name, grade, steamID, accountID, playerIP)
    sqlite_db:Execute("INSERT INTO players VALUES (:0, :1, :2, :3, :4)", name, grade.nom, steamID, accountID, playerIP)
end

