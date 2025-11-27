addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="spawnmenu" class="spawnmenu-center-container">

        <div class="spawnmenu-wrapper">
            
            <div class="spawnmenu-header">
                <h2 class="spawnmenu-title">Menu de Spawning</h2>
                <span onclick="ToggleSpawnMenu()" class="spawnmenu-close"><i class="fas fa-times"></i></span>
            </div>

            <div class="spawnmenu-main">
                
                <div class="spawnmenu-categories">
                    <div class="spawnmenu-category-item active"><i class="fas fa-car"></i> Véhicules</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-gun"></i> Armes</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-couch"></i> Meubles</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-box"></i> Objets Divers</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-tools"></i> Outils</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-person"></i> PNJ</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-flask"></i> Expérimental</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-car"></i> Véhicules (Rép)</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-gun"></i> Armes (Rép)</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-couch"></i> Meubles (Rép)</div>
                    <div class="spawnmenu-category-item"><i class="fas fa-box"></i> Objets Divers (Rép)</div>
                </div>

                <div class="spawnmenu-item-grid-container">
                    <div id="spawnmenuitemdiv" class="spawnmenu-item-grid">
                        <div class="spawnmenu-item-card selected">
                            <i class="fas fa-truck-monster spawnmenu-item-image" style="font-size: 3rem;"></i>
                            <span class="spawnmenu-item-name">Monster Truck Brutal</span>
                        </div>  
                    </div>
                </div>

            </div>

            <div class="spawnmenu-footer">
                
                <div class="spawnmenu-checkbox-group">
                    <div class="spawnmenu-checkbox checked" id="keep-open-checkbox">
                        <i class="fas fa-check"></i>
                    </div>
                    <label class="spawnmenu-checkbox-label" for="keep-open-checkbox">Gardez le menu ouvert</label>
                </div>

                <div class="spawnmenu-button-group">
                    <button onclick="ToggleSpawnMenu()" class="spawnmenu-btn spawnmenu-btn-dark">Annuler</button>
                    <button class="spawnmenu-btn spawnmenu-btn-blue">Apparaître l'Objet</button>
                </div>

            </div>

        </div>

    </div>
        `)
})

function ToggleSpawnMenu() {
    const spawnmenu = document.getElementById("spawnmenu")
    if (spawnmenu.style.display == "flex") {
        spawnmenu.style.display = "none"
    }else{
        spawnmenu.style.display = "flex"
    }
}

Events.Subscribe("AddStaticMechesToMenu", function(prop, icon){
    const spawnmenuitemdiv = document.getElementById("spawnmenuitemdiv")
    spawnmenuitemdiv.insertAdjacentHTML("beforeend", `
                        <div class="spawnmenu-item-card"">
                            <img src="${icon}" style="width: 100%; height: 100%" />
                            <span class="spawnmenu-item-name">${prop.key}</span>
                        </div>   
        `)
})


Events.Subscribe("ToggleSpawnMenu", ToggleSpawnMenu)