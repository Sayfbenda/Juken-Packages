Input.Bind("ToggleSpawnMenu", InputEvent.Pressed, function ()
    MainHUD:CallEvent("ToggleSpawnMenu")
end)

for _, asset in ipairs(Assets.GetAssetPacks()) do
    for __, prop in ipairs(Assets.GetStaticMeshes(asset.Path)) do
        MainHUD:CallEvent("AddStaticMechesToMenu", prop, tostring("assets://" .. asset.Path .. "/" .. ("Thumbnails/" .. prop.key .. ".jpg")))
    end
end