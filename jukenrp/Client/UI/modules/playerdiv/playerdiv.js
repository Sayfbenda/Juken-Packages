document.addEventListener("DOMContentLoaded", function(event) {
	// Inserts the scoreboard
	const body = document.querySelector(`body`);

	body.insertAdjacentHTML("afterbegin", `
		<!-- Health container (black background) -->
		<div id="health_container">
			<div id="divplayerimage">
				<img src="modules/health/health.png" id="image">
			</div>
			<div>
				<div id="healthbar">
					<span id="health_current">100</span>
				</div>
			</div>
		</div>
	`);
});

// Register for UpdateHealth custom event (from Lua)
function UpdateHealth(health, max_health) {
	document.getElementById("healthbar").setAttribute("style", `width : ${(health/max_health)*10}vw`)
	
	document.getElementById("health_current").innerHTML = health;

	// Bonus: make the background red when health below 25
	document.getElementById("health_container").style.backgroundColor = health <= 25 ? "#ff05053d" : "#0000003d";
}

function UpdateImage(image){
	const img = document.getElementById("image")
	img.setAttribute("src", image)
}

Events.Subscribe("UpdateHealth", UpdateHealth);
Events.Subscribe("UpdateImage", UpdateImage);