addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="invetairemenu" class="inventory-panel-standalone">
    <div class="inventory-panel">
        
        <div class="inventory-header">
            <p style="font-size: 0.8em; margin-bottom: 5px; color: #999999;">Accueil / <span style="color: #00BFFF;">Inventaire</span></p>
            <h1>Inventaire</h1>
            <p>Gérez tous les objets et équipements en votre possession.</p>
        </div>

        <div class="inventory-content-wrapper">
            
            <div class="inventory-main-section">
                
                <div class="inventory-search-filter-bar">
                    <div class="inventory-search-input-group">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" class="inventory-search-input" placeholder="Rechercher un objet...">
                    </div>
                    
                    <div class="inventory-filter-buttons">
                        <button class="inventory-filter-btn active">Tous</button>
                        <button class="inventory-filter-btn">Armes</button>
                        <button class="inventory-filter-btn">Armures</button>
                        <button class="inventory-filter-btn">Potions</button>
                        <button class="inventory-filter-btn">Matériaux</button>
                    </div>
                </div>

                <div class="inventory-grid">
                    
                    <div class="inventory-item-card">
                        <span class="inventory-item-quantity">5</span>
                        <div class="inventory-item-icon">

                        </div>
                        <div class="inventory-item-name">Potion de Santé</div>
                    </div>

                    <div class="inventory-item-card">
                        <span class="inventory-item-quantity">1</span>
                        <div class="inventory-item-icon">

                        </div>
                        <div class="inventory-item-name">Gemme de Mana</div>
                    </div>

                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                    <div class="inventory-item-card inventory-empty-slot">
                        <div class="inventory-item-icon"><i class="fa-regular fa-square"></i></div>
                        <div class="inventory-item-name">Emplacement Vide</div>
                    </div>
                </div>
            </div>
            
            <div class="inventory-equipment-zone">
                <h3>Équipement</h3>
                <div class="inventory-equipment-slots">
                    
                    <div class="inventory-slot-wrapper">
                        <div class="inventory-equipment-slot inventory-slot-equipped">

                        </div>
                        <div class="inventory-slot-label">
                            Casque
                            <small>Tête</small>
                        </div>
                    </div>
                    
                    <div class="inventory-slot-wrapper">
                        <div class="inventory-equipment-slot">
                            <i class="fa-solid fa-shirt"></i>
                        </div>
                        <div class="inventory-slot-label">
                            Armure
                            <small>Vide</small>
                        </div>
                    </div>

                    <div class="inventory-slot-wrapper">
                        <div class="inventory-equipment-slot inventory-slot-equipped">

                        </div>
                        <div class="inventory-slot-label">
                            Arme Principale
                            <small>Lame de Vaillance</small>
                        </div>
                    </div>
                    
                    <div class="inventory-slot-wrapper">
                        <div class="inventory-equipment-slot">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <div class="inventory-slot-label">
                            Arme Secondaire
                            <small>Vide</small>
                        </div>
                    </div>

                    <div class="inventory-slot-wrapper">
                        <div class="inventory-equipment-slot">
                            <i class="fa-solid fa-gem"></i>
                        </div>
                        <div class="inventory-slot-label">
                            Accessoire
                            <small>Vide</small>
                        </div>
                    </div>

                    <div class="inventory-slot-wrapper">
                        <div class="inventory-equipment-slot">
                            <i class="fa-solid fa-shoe-prints"></i>
                        </div>
                        <div class="inventory-slot-label">
                            Bottes
                            <small>Vide</small>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
        `)
})

function ToggleInventaireMenu() {
    const menudiv = document.getElementById("invetairemenu")
    if (menudiv.style.display == "block") {
        menudiv.style.display = "none"
    }else{
        menudiv.style.display = "block"
    }
}

Events.Subscribe("ToggleInventaireMenu", ToggleInventaireMenu)