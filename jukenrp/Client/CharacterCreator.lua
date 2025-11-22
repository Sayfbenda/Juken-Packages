MainHUD:Subscribe("GetAllValuesFromCreator", function (values, self)

    Events.CallRemote("SendToDiscord", tostring("Un nouveau personnage vient d'être crée : \n" ..
    "nom : " .. values["name"] .. 
    "\nNom de famille : " .. values["lastname"] .. 
    "\nAge : " .. values["age"] .. 
    "\nGenre : " .. values["genre"]), CHANNELS.newcharacter)
    
    local player = self

    Events.CallRemote("CreateCharacter", self, values)
end)