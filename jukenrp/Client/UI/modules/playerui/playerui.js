addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="playerui">
            <div id="charactervaluesdiv">
            </div>
        </div>
        `)
})

function UpdateValuesInScreen(params) {
    
}

Events.Subscribe("UpdateValues", function(health, reiatsu, displayedname, icon){
    const div = document.getElementById("charactervaluesdiv")
    div.innerHTML = `
        <div>
            <img src="${icon}"/>
            <div>
                <span>${displayedname}</span>
                <div>
                    <div id="healthmax">
                        <div id="healthbar">
                            <span>${health}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="reiatsuhmax">
                        <div id="reiatsubar">
                            <span>${reiatsu}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})


function TogglePlayerUi() {
    const playerui = document.getElementById("playerui")
    if (playerui.style.display == "flex") {
        playerui.style.display = "none"
    }else{
        playerui.style.display = "flex"
    }
}

Events.Subscribe("TogglePlayerUi", TogglePlayerUi)