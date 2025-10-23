const divplayer = document.getElementById("players")

function UpdateScoreBoard(icon, nom, fight, ping) {
    console.log("TTTTTTTTTTTTTT")
    divplayer.insertAdjacentHTML("afterbegin", `
    <div>
                    <div>
                        <h3>${icon}</h3>
                        <h3>${nom}</h3>
                    </div>
                    <div>
                        <h4>${fight}</h4>
                    </div>
                    <div>
                        <h4>${ping}</h4>
                    </div>
    </div>
                    `)
}

Events.Subscribe("UpdateScoreBoard", UpdateScoreBoard);