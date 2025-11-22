MainHUD:Subscribe("GetAllValuesFromCreator", function (values, self, index)
    
    Events.CallRemote("SendToDiscord", tostring("Un nouveau personnage vient d'être crée : \n" ..
    "nom : " .. values["name"] .. 
    "\nNom de famille : " .. values["lastname"] .. 
    "\nAge : " .. values["age"] .. 
    "\nGenre : " .. values["genre"]), CHANNELS.newcharacter)
    local player
    for index, value in ipairs(Player.GetAll()) do
        if NanosTable.Dump(value) == self then
            self = value
        end 
    end

    Events.CallRemote("CreateCharacter", self, values, index)    
end)


Character.Subscribe("Possess", function(self, player)
	MainHUD:CallEvent("UpdateValues", self:GetMaxHealth(), 10, self:GetValue("lastname") .. " " .. self:GetValue("name"))
    MainHUD:CallEvent("TogglePlayerUi")
end)