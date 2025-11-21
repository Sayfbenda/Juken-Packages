MainHUD:Subscribe("GetAllValuesFromCreator", function (values)
    Console.Log(values["name"])
    Console.Log(NanosTable.Dump(values))
    Events.CallRemote("SendToDiscord", tostring("Un nouveau personnage vient d'être crée : \n" ..
    "nom : " .. values["name"] .. 
    "\nNom de famille : " .. values["lastname"] .. 
    "\nAge : " .. values["age"] .. 
    "\nGenre : " .. values["genre"]), CHANNELS.newcharacter)
end)