let spellBarListe = [] 
spellslist = []
const spellstringdiv = ["first-spell", "second-spell", "third-spell", "fourth-spell", "fifth-spell", "sixth-spell"]

addEventListener("DOMContentLoaded", function(event){
    const body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin",`
        <section id="sectionspell">
            <div id="barspell">
                <div id="first-spell">
                
                </div>
                <div id="second-spell">
                
                </div>
                <div id="third-spell">
                
                </div>
                <div id="fourth-spell">
                
                </div>
                <div id="fifth-spell">
                
                </div>
                <div id="sixth-spell">
                
                </div>
            </div>
        </section>
        <section id="sectionmenu">
            <div id="menuspell">
                <div id="spellside">
                </div>
            </div>
        </section>
        `)
    for (let index = 0; index < spellstringdiv.length; index++) {
        spellBarListe.push(document.getElementById(spellstringdiv[index]))
    }
})


function DragandDrop() {
    const spells = document.getElementsByClassName("hudspell")
    console.log(spells.length)
    for (let index = 0; index < spells.length; index++) {
        spells.item(index).addEventListener("dragstart", (event)=>{
        event.dataTransfer.setData("spell/html", event.target.outerHTML)
    })  
    spells.item(index).addEventListener("dragend", (event)=>{
        console.log("finished")
        
    }) 
    }
    for (let index = 0; index < spellBarListe.length; index++) {
        spellBarListe[index].addEventListener("dragover", function(event){
            event.preventDefault()
        })
        spellBarListe[index].addEventListener("drop", function(event){
            const data = event.dataTransfer.getData("spell/html")
            spellBarListe[index].innerHTML = data
        })
    }
}

function AddSizeStyleToDiv(index) {
    for (let i = 0; i < spellBarListe.length; i++) {
        spellBarListe[i].classList.remove("selectedspell")
    }
    spellBarListe[index].classList.add("selectedspell")
}


function AddSpellsToHud(basedamage, energycost, img, nom) {
    let spell = new Object()
    spell.damage = basedamage
    spell.energy = energycost
    spell.image = img
    spell.name = nom
    spellslist.push(spell)
    for (let index = 0; index < spellslist.length; index++) {
        const div = document.getElementById("spellside")
        div.insertAdjacentHTML("beforeend", `
            <div class="hudspell" draggable="true">
                <img src=${spellslist[index].image} draggable="false">
            </div>
            `)
    }
    DragandDrop()
}

function ToggleSpellMenu(visibility) {
    const div = document.getElementById("sectionmenu")
    if (visibility) {
        div.style.visibility = "hidden"
    }else{
        div.style.visibility = "visible"
    }
}


Events.Subscribe("AddSizeStyleToDiv", AddSizeStyleToDiv)
Events.Subscribe("AddSpellsToHud", AddSpellsToHud)
Events.Subscribe("ToggleSpellMenu", ToggleSpellMenu)