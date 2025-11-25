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
                                <label class="creatormenu-label">Alias</label>
                                <input type="text" class="creatormenu-input-text" placeholder="Ex: CyberWolf_99">
                            </div>
                            <div>
                                <label class="creatormenu-label">Alias</label>
                                <input type="text" class="creatormenu-input-text" placeholder="Ex: CyberWolf_99">
                            </div>
                        </div>

                        <div class="creatormenu-form-group">
                            <label class="creatormenu-label">Type de corps</label>
                            <div class="creatormenu-gender-grid">
                                <div class="creatormenu-gender-card creatormenu-selected">
                                    <i class="fa-solid fa-mars"></i>
                                    <span>Type A</span>
                                </div>
                                <div class="creatormenu-gender-card">
                                    <i class="fa-solid fa-venus"></i>
                                    <span>Type B</span>
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
                        <button onclick="ToggleCharacterCreator()" class="creatormenu-btn creatormenu-btn-ghost">Annuler</button>
                        <button class="creatormenu-btn creatormenu-btn-solid">Créer</button>
                    </div>

                </div>

            </div>
        `)
})

function ToggleCharacterCreator() {
    const creatormenu = document.getElementById("creatormenu")
    if (creatormenu.style.display == "flex") {
        creatormenu.style.display = "none"
    }else{
        creatormenu.style.display = "flex"
    }
}

Events.Subscribe("ToggleCharacterCreator", ToggleCharacterCreator)