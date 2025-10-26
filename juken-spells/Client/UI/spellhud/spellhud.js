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

Events.Subscribe("AddSizeStyleToDiv", AddSizeStyleToDiv)