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
})


function AddSizeStyleToDiv(index) {
    const spellListe = ["first-spell", "second-spell", "third-spell", "fourth-spell", "fifth-spell", "sixth-spell"]
    for (let i = 0; i < spellListe.length; i++) {
        let div = document.getElementById(spellListe[i])
        div.classList.remove("selectedspell")
    }
    let div = document.getElementById(spellListe[index])
    div.classList.add("selectedspell")
}


function AddSpellsToHud(basedamage, energycost, img, nom) {
    let spellslist = []
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
}

Events.Subscribe("AddSizeStyleToDiv", AddSizeStyleToDiv)
Events.Subscribe("AddSpellsToHud", AddSpellsToHud)