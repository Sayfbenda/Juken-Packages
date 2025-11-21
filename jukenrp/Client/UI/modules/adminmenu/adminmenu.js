const body = document.querySelector("body")
let categorylist = []
class Category {
    constructor(name, description, list) {
        this.name = name;
        this.description = description;
        this.content = list
    }

    pushinlist(){
        categorylist.push(this)
    }
}

const ServerInfo = new Category(
    "Server Information",
    "effectuer des changements sur le serveurs et effectuer des changements",
    
)

ServerInfo.pushinlist()

const Player = new Category(
    "Player manager",
     "effectuer des échanges sur les joueurs",
    [
        
    ]
)

Player.pushinlist()

const AdminCategory = new Category(
    "Admin Settings",
    "blalalala",
    []
) 

AdminCategory.pushinlist()

addEventListener("DOMContentLoaded", function(e){
    body.insertAdjacentHTML("beforeend", `
        <div id="adminMenu">
            
        </div>
        `)
        InsertMenu()
})

function InsertMenu() {
    const div = document.getElementById("adminMenu")
    for (let index = 0; index < categorylist.length; index++) {
        let html = `
        <div ="${categorylist[index].name}">
            <h2>${categorylist[index].name}</h2>
        </div>
        `
        div.insertAdjacentHTML("beforeend", html)        
        
    }
}

Events.Subscribe("GetAllPlayers", function(players){
    console.log(players)
    console.log(typeof(players))
})