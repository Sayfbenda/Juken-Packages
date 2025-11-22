MainHUD:Subscribe("GetAllValuesFromCreator", function (values, self, index)
    Events.CallRemote("CreateCharacter", self, values, index)    
end)


Character.Subscribe("Possess", function(self, player)
    
	MainHUD:CallEvent("UpdateValues", self:GetHealth(), self:GetMaxHealth(), 10, self:GetValue("lastname") .. " " .. self:GetValue("name"), player:GetAccountIconURL(), self:GetValue("grade").nom)
    MainHUD:CallEvent("TogglePlayerUi")
end)