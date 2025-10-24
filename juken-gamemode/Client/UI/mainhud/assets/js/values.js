const playermanager = document.getElementById("playermanager")
const img = document.getElementById("image")
const h3name = document.getElementById("name")
const divhealth = document.getElementById("health")
const divenergy = document.getElementById("energy")

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

function UpdateHealth(health, healthmax) {
    divhealth.innerText = `${health}/${healthmax}`
}

function UpdatePlayerValues(image, name, health, healthmax, energy, energymax){
    img.setAttribute("src", image)
    h3name.innerText = name
    divhealth.innerText = `${health}/${healthmax}`
    divenergy.innerText = `${energy}/${energymax}`
}

Events.Subscribe("UpdatePlayerValues", UpdatePlayerValues);
Events.Subscribe("UpdateHealth", UpdateHealth);