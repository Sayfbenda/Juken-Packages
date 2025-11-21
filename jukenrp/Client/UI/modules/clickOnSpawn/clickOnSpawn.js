addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="clickonspawn">
            <h2>Cliquez Pour continuer</h2>
        </div>
        `)
    EventListenerToDiv(document.querySelector("#clickonspawn"))
})

function EventListenerToDiv(div) {
    div.addEventListener("click", function(e){
        ToggleClickOnSpawn()
    })
}

function ToggleClickOnSpawn() {
    const clickonspawn = document.querySelector("#clickonspawn")
    if (clickonspawn.style.display == "block") {
        clickonspawn.style.display = "none"
    }else{
        clickonspawn.style.display = "block"
    }
}


Events.Subscribe("ToggleClickOnSpawn", ToggleClickOnSpawn)