Package.Require("SpellMenu.lua")

local configuration_file = File("Config.json")

local configuration_file_json = JSON.parse(configuration_file:Read())