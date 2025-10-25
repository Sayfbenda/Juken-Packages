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
    local name = player:GetSteamID()
    local rows_filter = sqlite_db:Select("SELECT steamid FROM players WHERE steamid = :0", name)
    local verify = NanosTable.Dump(rows_filter)
    local steamID = player:GetSteamID()
    if (verify == "{}" ) then
        Events.CallRemote("OpenCharacterCreator", player, 1)
    else
        Console.Log("Le joueur : " .. name .. " est enregistré")
    end
end

function InsertPlayerInDB(name, age, grade, steamID, accountID, playerIP)
    sqlite_db:Execute("INSERT INTO players VALUES (:0, :1, :2, :3, :4 ,:5)", name, age, grade.id, steamID, accountID, playerIP)
    Console.Log("Le joueur a " .. name .. " été enregistré avec succés")
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

Package.Export("InsertPlayerInDB", InsertPlayerInDB)