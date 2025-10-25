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
        Events.CallRemote("OpenCharacterCreator", player, 1)
    else
        Console.Log("Le joueur : " .. steamID .. " est enregistré")
    end
end

function InsertPlayerInDB(name, age, grade, steamID, accountID, playerIP)
    sqlite_db:Execute("INSERT INTO players VALUES (:0, :1, :2, :3, :4 ,:5)", name, age, grade.id, steamID, accountID, playerIP)
    Console.Log("Le joueur a " .. name .. " été enregistré avec succés")
end

function UpdateGrade(steamid, grade)
    sqlite_db:Execute("UPDATE players SET grade = :0 WHERE steamid = :1", grade.id, steamid)
end

function SelectGrade(self, name)
    local rows_filter = sqlite_db:Select("SELECT grade FROM players WHERE name = :0", name)
    local grade = NanosTable.Dump(rows_filter):match('%["grade"%]%s*=%s*"([^"]+)"')
    if (grade == nil) then
        return
    end
	UpdateValuesGrade(self, grade)
end

function SelectName(player)
    local steamid = player:GetSteamID()
    local rows_filter = sqlite_db:Select("SELECT name FROM players WHERE steamid = :0", steamid)
    local name = NanosTable.Dump(rows_filter):match('%["name"%]%s*=%s*"([^"]+)"')
    if (name == nil) then
        return
    end
    player:SetName(name)
end

Package.Export("InsertPlayerInDB", InsertPlayerInDB)