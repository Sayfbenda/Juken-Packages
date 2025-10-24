const playermanager = document.getElementById("playermanager")

document.addEventListener("DOMContentLoaded", function() {
    const playerValuesDiv = document.getElementById("playervalues");
    
    playerValuesDiv.innerHTML = `
        <div>
            <img src="assets/img/heart.svg" alt="">
            <span id="health">100</span>
        </div>
        <div>
            <img src="assets/img/armor.svg" alt="">
            <span id="armor">50</span>
        </div>
    `;
});

function UpdateHealth(health) {
    document.getElementById("health").innerText = health;
    console.log("Health updated to:");
}

function UpdatePlayerValues(image, name, health, healthmax, energy, energymax){
    let html = `
        <img src=${image} alt="">
        <span>${name}</span>
        <span>${health}</span>
        <span>${healthmax}</span>
        <span>${energy}</span>
        <span>${energymax}</span>
    `
    playermanager.innerHTML = html
}

Events.Subscribe("UpdatePlayerValues", UpdatePlayerValues);
Events.Subscribe("UpdateHealth", UpdateHealth);