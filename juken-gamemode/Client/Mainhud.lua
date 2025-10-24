local mainhud = WebUI(
    "ScoreBard",
    "file://UI/mainhud/index.html",
    WidgetVisibility.Visible
)

function UpdateHealth(health)
    mainhud:CallEvent("UpdateHealth", health)
end



local my_canvas = Canvas(
  true,
  Color.TRANSPARENT,
  0,
  true
)

my_canvas:Subscribe("Update", function(self, width, height)
    local player = Client.GetLocalPlayer()
    local character = player:GetControlledCharacter()
    if (not character) then
        return
    end
    local rotator = character:GetControlRotation()
    local yaw_value = string.match(tostring(rotator), "Yaw%s*=%s*([%d%.%-]+)")
    mainhud:CallEvent("UpdateCardinalBar", yaw_value)
    self:DrawText(yaw_value, Vector2D(width / 2, height / 2))
end)

mainhud:Subscribe("Update", function ()
    Console.Log("test")
end)