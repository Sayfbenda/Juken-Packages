Input.Subscribe("KeyDown", function (key_name, delta)
    if key_name == "Ampersand" then
        local local_player = Client.GetLocalPlayer()
        local camera_rotation = local_player:GetCameraRotation()
        local start_location = local_player:GetCameraLocation()

        local character = local_player:GetControlledCharacter()

        local direction =  camera_rotation:GetForwardVector()

        local end_location = start_location + direction * 20000

        local collision_trace = CollisionChannel.WorldStatic | CollisionChannel.WorldDynamic | CollisionChannel.PhysicsBody | CollisionChannel.Vehicle

        local trace_mode = TraceMode.TraceOnlyVisibility | TraceMode.DrawDebug | TraceMode.TraceComplex | TraceMode.ReturnEntity

        local trace_result = Trace.LineSingle(start_location, end_location, collision_trace, trace_mode)


        Events.CallRemote("LunchSpell",character, camera_rotation, trace_result.Location)
    end
end)

