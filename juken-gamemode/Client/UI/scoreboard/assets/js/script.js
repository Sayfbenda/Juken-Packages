const divplayer = document.getElementById("players")

console.log(divplayer)

let players = []

let player = new Object()
player.image
player.name
player.pvp
player.ping

function registerPlayer(image, nom, pvp, ping) {
    player.image = image
    player.nom = nom
    player.pvp = pvp
    player.ping = ping
    players.push(player)
    addPlayer(players)
    console.log(players)
}

function addPlayer(players) {
    divplayer.innerHTML += `
    <div>
                    <div>
                        <img src="../scoreboard/assets/img/wifi.svg" alt="">
                        <h3>${players[players.length -1].nom}</h3>
                    </div>
                    <div>
                        <h4>${players[players.length -1].pvp}</h4>
                    </div>
                    <div>
                        <h4>${players[players.length -1].ping}</h4>
                    </div>
    </div>
                    `
}

