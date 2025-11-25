addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforebegin", `
            <div id="creatormenu" class="creatormenu-overlay">
                
                <div class="creatormenu-preview-zone">


                </div>

                <div class="creatormenu-ui-panel">
                    
                    <div class="creatormenu-header">
                        <h2>Nouveau Perso</h2>
                        <p>Définissez votre identité virtuelle</p>
                    </div>

                    <div class="creatormenu-nav-tabs">
                        <div class="creatormenu-tab creatormenu-active">Général</div>
                        <div class="creatormenu-tab">Apparence</div>
                        <div class="creatormenu-tab">Attributs</div>
                    </div>

                    <div class="creatormenu-content">
                        
                        <div class="creatormenu-form-group">
                            <div>
                                <label class="creatormenu-label">Prénom</label>
                                <input id="input-name" type="text" class="creatormenu-input-text" placeholder="Ichigo">
                            </div>
                            <div>
                                <label class="creatormenu-label">Nom</label>
                                <input id="input-lastname" type="text" class="creatormenu-input-text" placeholder="Korusaki">
                            </div>
                        </div>

                        <div class="creatormenu-form-group">
                            <label class="creatormenu-label">Type de corps</label>
                            <div class="creatormenu-gender-grid">
                                <div id="Homme" class="creatormenu-gender-card creatormenu-selected">
                                    <i class="fa-solid fa-mars"></i>
                                    <span>Homme</span>
                                </div>
                                <div id="Femme" class="creatormenu-gender-card">
                                    <i class="fa-solid fa-venus"></i>
                                    <span>Femme</span>
                                </div>
                            </div>
                        </div>

                        <div class="creatormenu-form-group">
                            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                                <label class="creatormenu-label" style="margin:0;">Taille</label>
                                <span style="color:white; font-size:0.8rem; font-weight:700;">185 cm</span>
                            </div>
                            <div class="creatormenu-slider-container">
                                <input type="range" class="creatormenu-slider" min="150" max="210" value="185">
                            </div>
                        </div>

                    </div>

                    <div class="creatormenu-footer">
                        <button onclick="RetournToCharacterChooser()" class="creatormenu-btn creatormenu-btn-ghost">Annuler</button>
                        <button onclick="GetValuesFromInputsCharacterCreator()" class="creatormenu-btn creatormenu-btn-solid">Créer</button>
                    </div>

                </div>

            </div>
        `)
        const creatormenugendercard = document.querySelectorAll(".creatormenu-gender-card")
        creatormenugendercard.forEach(element => {
            element.addEventListener("click", function(e){
                creatormenugendercard.forEach(el => {
                    el.classList.remove("creatormenu-selected")
                });
                element.classList.add("creatormenu-selected")
            })
        });
})

function ToggleCharacterCreator() {
    const creatormenu = document.getElementById("creatormenu")
    if (creatormenu.style.display == "flex") {
        creatormenu.style.display = "none"
    }else{
        creatormenu.style.display = "flex"
    }
}

function RetournToCharacterChooser() {
    ToggleCharacterCreator()
    Events.Call("DisplayCharacterChooserMenu")
}

function GetValuesFromInputsCharacterCreator() {
    ToggleCharacterCreator()
    const inputname = document.getElementById("input-name")
    const inputlastname = document.getElementById("input-lastname")
    const inputgenre = document.querySelector(".creatormenu-selected")
    
    const name = inputname.value
    const lastname = inputlastname.value
    const genre = inputgenre.id
    Events.Call("CreateCharacterByCreator", name, lastname, genre)
    return {name, lastname, genre}
}

Events.Subscribe("ToggleCharacterCreator", ToggleCharacterCreator)