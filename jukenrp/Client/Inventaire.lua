Input.Register("ToggleInventaire", "F3")

Input.Bind("ToggleInventaire", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleInventaireMenu")
end)