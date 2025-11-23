addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
            <div id="clickonspawn" class="screen-container">
                <div class="continue-text">
                    Cliquez pour continuer
                </div>
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
        Events.Call("ClickedOnspanw")
    }else{
        clickonspawn.style.display = "block"
    }
}


Events.Subscribe("ToggleClickOnSpawn", ToggleClickOnSpawn)