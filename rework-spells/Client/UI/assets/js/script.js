let kidodivlist = []
let kido = Object()

const body = document.querySelector("body")
addEventListener("DOMContentLoaded", function(e){
    let kidoBarHTML = `
    <div id="globaldiv">
        <div id="first-kido">
            <span>1</span>
            <div class="kidodiv">
                <img src="" alt="">
            </div>
            <span>0</span>
        </div>
        <div id="second-kido">
            <span>2</span>
            <div class="kidodiv">
                <img src="" alt="">
            </div>
            <span>0</span>
        </div>
        <div id="third-kido">
            <span>3</span>
            <div class="kidodiv">
                <img src="" alt="">
            </div>
            <span>0</span>
        </div>
        <div id="fourth-kido">
            <span>4</span>
            <div class="kidodiv">
                <img src="" alt="">
            </div>
            <span>0</span>
        </div>
        <div id="fifth-kido">
            <span>5</span>
            <div class="kidodiv">
                <img src="" alt="">
            </div>
            <span>0</span>
        </div>
        <div id="sixth-kido">
            <span>6</span>
            <div class="kidodiv">
                <img src="" alt="">
            </div>
            <span>0</span>
        </div>
    </div>
`
    let KidoMenu = `
    
    `
    body.insertAdjacentHTML("beforeend", kidoBarHTML)
    const kidoDiv = document.getElementById("globaldiv")
    addKidoDivTolist(kidodivlist, kidoDiv)
})

function addKidoDivTolist(liste, div) {
    for (let index = 0; index < div.children.length; index++) {
        let element = div.children[index]
        liste.push(element)    
    }
}

Events.Subscribe("SelectKido", function(i){
    if (kidodivlist[i].classList != "size") {
        for (let index = 0; index < kidodivlist.length; index++) {
            kidodivlist[index].classList.remove("size")
    }
        kidodivlist[i].classList.add("size")
    }else{
        kidodivlist[i].classList.remove("size")
    }
})

Events.Subscribe("LoadKido", function(element){
    kido.hado = {
        
    }
})