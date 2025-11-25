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
    local insertedplayer = database:Execute("INSERT INTO players VALUES (?, ?, ?, ?, ?, ?)", player:GetID(), player:GetName(), tostring(player:GetSteamID()), "none", player:GetIP(), "0, 0, 0")
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



function SelectPlayerCharacters(player)
    local select = database:Select("SELECT * FROM characters WHERE playersteamid = ?", player:GetSteamID())
    return select
end

Events.SubscribeRemote("CharactersForchooserMenu", function (local_player)
    local characters = SelectPlayerCharacters(local_player)
    Events.CallRemote("GetCharactersForChooser", local_player, characters)
end)

function InsertCharacterToDB(player, character)
    local insertedcharacter = database:Execute("INSERT INTO characters VALUES (?, ?, ?, ?, ?, ?)", character:GetValue("id"), player:GetSteamID(), character:GetValue("name"), character:GetValue("lastname"), character:GetValue("age"), character:GetValue("grade"))
    return insertedcharacter
end

function GetAllCharacters()
    local select = database:Select("SELECT * FROM characters")
    return select
end

function GetCharacterbyID(id)
    local select = database:Select("SELECT * FROM characters WHERE id = ?", id)
    return select
end

function UpdateCharacterGradebyID(id, grade)
    local updatedcharacter = database:Select("UPDATE characters SET grade = ? WHERE id = ?", grade, id)
    return updatedcharacter
end

Events.SubscribeRemote("GetAllCharacters", function ()
    GetAllCharacters()
end)

Events.SubscribeRemote("InsertCharacterToDB", InsertCharacterToDB)