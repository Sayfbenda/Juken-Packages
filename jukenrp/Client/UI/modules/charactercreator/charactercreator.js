let player

addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
            <div id="creatorMenu">
                <div id="FirstCharacter">

                </div>
                <div id="SecondCharacter">

                </div>
                <div id="ThridCharacter">

                </div>
            </div>
        `)

        const div = document.getElementById("creatorMenu")
        const divs = div.children
        AddOnclickOnDivs(div.children, div.children.length)
})

function ToggleCharacterCreator() {
    const creatorMenu = document.querySelector("#creatorMenu")
    if (creatorMenu.style.display == "flex") {
        creatorMenu.style.display = "none"
    }else{
        creatorMenu.style.display = "flex"
    }
}

function AddOnclickOnDivs(divs, length) {
    for (let index = 0; index < length; index++) {
        divs[index].addEventListener("click", function(e){
            CreateCharacter(index)
        })
        
    }
}

function CreateCharacter(characterNumbrer) {
    const creatorMenu = document.getElementById("creatorMenu")
    let html = `
            <section id="form">
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minlength="4"
                    maxlength="12"
                    placeholder="Kinkaku"
                    size="10" />
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    minlength="0"
                    maxlength="12"
                    placeholder="Korosenai"
                    size="10" />
                <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    min="12" 
                    max="80" 
                    value="12"/>

                    <div>
                        <input type="radio" id="genderFemale" name="gender" value="gender" checked />
                        <label for="gender">Femme</label>
                    </div>

                    <div>
                        <input type="radio" id="genderMale" name="gender" value="gender" />
                        <label for="gender">Homme</label>
                    </div>
                    <input id="submit" type="submit" value="Créer" />
            </section>
        `
    creatorMenu.innerHTML = html
    SubmitByPlayer(document.getElementById("submit"))
}

function SubmitByPlayer(input) {
    input.addEventListener("click", function(e){
        ToggleCharacterCreator()
        GetAllValues()
        
    })
}

function GetAllValues() {
    const name = document.getElementById("name").value
    const lastname = document.getElementById("lastname").value
    const age = document.getElementById("age").value
    let genre
    if (document.getElementById("genderFemale").checked) {
        genre = "Femme"
    }else{
        genre = "Homme"
    }
    Events.Call("GetAllValuesFromCreator",
        {
            name : name,
            lastname: lastname,
            age: age,
            genre: genre
        },
        player
        ) 
}

function AddBlankCharactersToDiv(index) {
    const div = document.getElementById("creatorMenu")
    const divs = div.children
    for (let i = 0; i < divs.length; i++) {
        div.children[i].innerHTML = "None"
        
    }
}

function AddTrueCharacterToDiv(index) {
    
}

Events.Subscribe("AddCharacters", function(self, steamid, characters){
    for (let index = 0; index < characters.length; index++) {
        if (characters[index] == 0) {
            AddBlankCharactersToDiv(index)
        }else{
            AddTrueCharacterToDiv(index)
        }
    }
    player = self
})

Events.Subscribe("ToggleCharacterCreator", ToggleCharacterCreator)