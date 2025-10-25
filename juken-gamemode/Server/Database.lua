local sqlite_db = Database(DatabaseEngine.SQLite, "db=database_juken.db timeout=2")

sqlite_db:Execute([[
	CREATE TABLE IF NOT EXISTS players (
		name VARCHAR(100),
		grade VARCHAR(100),
		steamid INTEGER,
		accountid INTEGER,
		ip VARCHAR(100)
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
    local grade = character:GetValue("grade")
    if (verify == "{}" ) then
        Events.CallRemote("OpenCharacterCreator", player, 1)
        Console.Log("Le joueur a " .. name .. " été enregistré avec succés")
        InsertPlayerInDB(name, grade, steamID, accountID, playerIP)
    else
        Console.Log("Le joueur : " .. name .. " est enregistré")
    end
end

function InsertPlayerInDB(name, grade, steamID, accountID, playerIP)
    sqlite_db:Execute("INSERT INTO players VALUES (:0, :1, :2, :3, :4)", name, grade.id, steamID, accountID, playerIP)
end

function UpdateGrade(name, grade)
    sqlite_db:Execute("UPDATE players SET grade = :0 WHERE name = :1", grade.id, name)
end

function SelectGrade(self, name)
    local rows_filter = sqlite_db:Select("SELECT grade FROM players WHERE name = :0", name)
    local grade = NanosTable.Dump(rows_filter):match('%["grade"%]%s*=%s*"([^"]+)"')
    if (grade == nil) then
        return
    end
    Console.Log("Le goat est " .. grade)
	UpdateValuesGrade(self, grade)
end
