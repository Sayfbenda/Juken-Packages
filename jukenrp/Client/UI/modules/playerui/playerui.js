addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="playerui">
            <div id="charactervaluesdiv">
            </div>
        </div>
        `)
})

function UpdateValuesInScrenn(params) {
    
}

Events.Subscribe("UpdateValues", function(health, reiatsu, displayedname){
    console.log(health, displayedname, reiatsu)


})


function TogglePlayerUi() {
    const playerui = document.getElementById("playerui")
    if (playerui.style.display == "block") {
        playerui.style.display = "none"
    }else{
        playerui.style.display = "block"
    }
}

Events.Subscribe("TogglePlayerUi", TogglePlayerUi)