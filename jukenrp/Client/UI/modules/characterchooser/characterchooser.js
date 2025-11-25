addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforebegin", `
        <div id="characterchooser" class="characterchooser-container">
        
            <h1 class="characterchooser-title">Choisissez votre destinée</h1>

            <div id="characterchooser-cards" class="characterchooser-cards-section">

            </div>

        </div>
        `)

})

function ToggleCharacterChooser() {
    const characterchooser = document.getElementById("characterchooser")
    if (characterchooser.style.display == "flex") {
        characterchooser.style.display = "none"
    }else{
        characterchooser.style.display = "flex"
    }
}

Events.Subscribe("AddCharactersTochooser", function(characters){
    const characterchoosercards = document.getElementById("characterchooser-cards")
    console.log(characterchoosercards.children.length)
    characters.forEach(element => {
        characterchoosercards.insertAdjacentHTML("beforeend", `
                <div class="characterchooser-card taken" data-target="${element.id}">
                    <div class="characterchooser-clan-symbol"><i class="fa-solid fa-water"></i></div>
                    <h2 class="characterchooser-char-name">${element.name + element.lastname}</h2>
                    <p class="characterchooser-char-level">null</p>
                    <p class="characterchooser-char-level">${element.grade}</p>
                    <div class="characterchooser-char-image-container">
                        <i class="fa-solid fa-user-ninja characterchooser-char-placeholder" style="color: #a0a0a0;"></i>
                    </div>
                </div>
            `)
    });
    while (characterchoosercards.children.length < 3) {
        characterchoosercards.insertAdjacentHTML("beforeend", `
                <div class="characterchooser-card">
                    <div class="characterchooser-clan-symbol"><i class="fa-solid fa-water"></i></div>
                    <h2 class="characterchooser-char-name">Créez votre personnage</h2>
                    <p class="characterchooser-char-level">Emplacement vide</p>
                    <div class="characterchooser-char-image-container">
                        <i class="fa-solid fa-user-ninja characterchooser-char-placeholder" style="color: #a0a0a0;"></i>
                    </div>
                </div>
            `)
    }
    const cards = document.querySelectorAll(".characterchooser-card")
    cards.forEach(element => {
        element.addEventListener("click", function(e){
            if (e.target.classList.contains("taken")) {
                const id = e.target.getAttribute("data-target")
                Events.Call("ChooseCharacter", id)
            }else{
                ToggleCharacterChooser()
                Events.Call("DisplayCharacterCreator")
            }
        })
    }); 
})



Events.Subscribe("ToggleCharacterChooser", ToggleCharacterChooser)