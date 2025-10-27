let spellBarListe = [] 
spellslist = []
const spellstringdiv = ["first-spell", "second-spell", "third-spell", "fourth-spell", "fifth-spell", "sixth-spell"]
let selectedSpell
let data 
let id

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
    for (let index = 0; index < spells.length; index++) {
        spells.item(index).addEventListener("dragstart", (event)=>{
        id = event.target.id
        data = event.target.outerHTML
    })  
    }
    for (let index = 0; index < spellBarListe.length; index++) {
        spellBarListe[index].addEventListener("dragover", function(event){
            event.preventDefault()
        })
        spellBarListe[index].addEventListener("drop", function(event){
                event.target.innerHTML = data
        })        
    }
}

function AddSizeStyleToDiv(index) {
    for (let i = 0; i < spellBarListe.length; i++) {
        spellBarListe[i].classList.remove("selectedspell")
    }
    spellBarListe[index].classList.add("selectedspell")
    selectedSpell = spellBarListe[index].firstChild.id
}


function AddSpellsToHud(basedamage, energycost, img, nom, identificator) {
    let spell = new Object()
    spell.damage = basedamage
    spell.energy = energycost
    spell.id = identificator
    spell.image = img
    spell.name = nom
    spellslist.push(spell)
    const div = document.getElementById("spellside")
        div.insertAdjacentHTML("beforeend", `
            <div class="hudspell" draggable="true" id=${spell.id}>
                <img src=${spell.image} draggable="false">
            </div>
            `)
    DragandDrop()
}
function GetSpell() {
    Events.Call("LancerSpell", selectedSpell)
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
Events.Subscribe("GetSpell", GetSpell)