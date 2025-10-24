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
    local x_value = string.match(tostring(Viewport.GetMousePosition()), "X%s*=%s*([%d%.%-]+)")
    x_value = tonumber(((x_value)*100)/360)
    self:DrawText(tostring(x_value), Vector2D(width / 2, height / 2))
end)

	