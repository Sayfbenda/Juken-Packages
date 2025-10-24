const cordinalbar = document.getElementById("cordinalbar");
const canvasbar = document.getElementById("canvasbar")

function UpdateCardinalBar(coordiantion) {
    let html = `
    <h2>${coordiantion}</h2>
    `
    cordinalbar.innerHTML = html
}
Events.Subscribe("UpdateCardinalBar", UpdateCardinalBar);