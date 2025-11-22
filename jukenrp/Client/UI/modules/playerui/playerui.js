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

Events.Subscribe("UpdateValues", function(heath, healthmax, reiatsu, displayedname, icon, grade){
    const healthpourcentage = (heath/healthmax)*100
    const div = document.getElementById("charactervaluesdiv")
    div.innerHTML = `
        <div class="hud-card">
        
        <div class="avatar-container">
            <img src="${icon}" class="avatar-img">
            <div class="level-tag">LVL 05</div>
            <span class="grade-tag">${grade}</span>
        </div>

        <div class="info-container">
            
            <div class="header-row">
                <h2 class="char-name">${displayedname}</h2>
                <div class="currency">
                    <i class="fa-solid fa-coins"></i> 0
                </div>
            </div>

            <div class="stat-row">
                <div class="stat-header">
                    <span><i class="fa-solid fa-heart" style="color:var(--accent-red); margin-right:4px;"></i> Health</span>
                    <span>${healthpourcentage}</span>
                </div>
                <div class="bar-track">
                    <div class="bar-fill hp-fill" style="width: ${healthpourcentage}%;"></div>
                </div>
            </div>

            <div class="stat-row">
                <div class="stat-header">
                    <span><i class="fa-solid fa-bolt" style="color:var(--accent-blue); margin-right:4px;"></i> Reiatsu</span>
                    <span>60%</span>
                </div>
                <div class="bar-track">
                    <div class="bar-fill mp-fill" style="width: 60%;"></div>
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