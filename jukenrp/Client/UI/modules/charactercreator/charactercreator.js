let visibility = true

function ToggleMenu() {
    console.log("hello")
    const body = document.querySelector("body")
    
    body.insertAdjacentHTML("afterbegin", `
        <div id="character_menu">
            <form method="dialog">
                <div>
                    <input type="text" name="nom" id="nom" placeholder="Entrez le nom de votre personnage">
                    <input type="text" name="prenom" id="prenom" placeholder="Entrez le prénom de votre personnage">
                </div>
                <div>
                    <input type="range" name="" id="age" min="1" max="33">
                </div>
                <div>
                    <input type="submit" name="" id="">
                </div>
            </form>
        </div>
        `)
}

ToggleMenu()