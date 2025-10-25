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
        local character = player:GetControlledCharacter()
        local name = player:GetName()
        local age = "20"
        local grade = character:GetValue("grade")
        local accountID = tostring(player:GetAccountID())
        local playerIP = tostring(player:GetIP())
        InsertPlayerInDB(name, age, grade, steamID, accountID, playerIP)
        SelectGrade(character, name)
    else
        Console.Log("Le joueur : " .. steamID .. " est enregistré")
        local character = player:GetControlledCharacter()
        SelectGrade(character, player:GetName())
    end
end

function InsertPlayerInDB(name, age, grade, steamID, accountID, playerIP)
    sqlite_db:Execute("INSERT INTO players VALUES (:0, :1, :2, :3, :4 ,:5)", name, age, grade.id, steamID, accountID, playerIP)
    Console.Log("Le joueur a " .. name .. " été enregistré avec succés")
end

function SelectGrade(character, name)
    local rows_filter = sqlite_db:Select("SELECT grade FROM players WHERE name = :0", name)
    local grade = NanosTable.Dump(rows_filter):match('%["grade"%]%s*=%s*"([^"]+)"')
    if (grade == nil) then
        return
    end
	SetValuesTocharacter(character, grade)
end