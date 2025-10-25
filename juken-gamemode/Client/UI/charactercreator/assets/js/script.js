const nom = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const inputeage = document.getElementById("age")
const valueage = document.getElementById("valueage")
const valueskins = document.getElementById("valueskins")
const inputskins = document.getElementById("skins")
const sendinput = document.getElementById("sendinput")
const form = document.querySelector("form")


inputeage.addEventListener("mousemove", (event) =>{
    valueage.innerText = inputeage.value
})

inputskins.addEventListener("mousemove", (event) =>{
    valueskins.innerText = inputskins.value
})

form.addEventListener("submit", (event)=>{
    SetValuesToPlayer()
})


function SetValuesToPlayer() {
    let playernom = nom.value
    let playerprenom = prenom.value
    let playerage = inputeage.value
    let skin = inputskins.value
    Events.Call("GetValues", playernom, playerprenom, playerage, skin)
}

function SetSkinLength(length) {
    inputskins.setAttribute("max", length)
}

Events.Subscribe("SetSkinLength", SetSkinLength);
