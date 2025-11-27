addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="inventairemenu" class="inventory-container">
    
    <div class="inventory-header">
        <div class="header-title">
            <i class="fas fa-box-open"></i> INVENTAIRE
        </div>
        <div class="header-controls">
            <div class="header-button">Hôtel de Vente</div>
            <div class="header-button exit">Quitter</div>
        </div>
    </div>
    
    <div class="inventory-main-content">
        
        <div class="inventory-panel">
            
            <div class="inventory-tabs">
                <div class="tab-item active">MATÉRIAUX</div>
                <div class="tab-item">ÉQUIPEMENTS</div>
            </div>
            
            <div class="item-grid">
                
                <div class="item-slot color-orange"><i class="fas fa-scroll"></i><span class="item-quantity">x5</span></div>
                <div class="item-slot color-green"><i class="fas fa-tree"></i><span class="item-quantity">x4</span></div>
                <div class="item-slot color-purple"><i class="fas fa-flask"></i><span class="item-quantity">x3</span></div>
                <div class="item-slot color-yellow"><i class="fas fa-sack"></i><span class="item-quantity">x1</span></div>
                <div class="item-slot color-red"><i class="fas fa-gem"></i><span class="item-quantity">x3</span></div>
                <div class="item-slot color-blue"><i class="fas fa-atom"></i><span class="item-quantity">x2</span></div>

                <div class="item-slot color-red"><i class="fas fa-tshirt"></i><span class="item-quantity">x1</span></div>
                <div class="item-slot color-green"><i class="fas fa-apple-alt"></i><span class="item-quantity">x4</span></div>
                <div class="item-slot color-yellow"><i class="fas fa-rings-medical"></i><span class="item-quantity">x2</span></div>
                <div class="item-slot color-purple"><i class="fas fa-braid"></i><span class="item-quantity">x5</span></div>
                <div class="item-slot color-blue"><i class="fas fa-flask-vial"></i><span class="item-quantity">x4</span></div>
                <div class="item-slot color-orange"><i class="fas fa-bezier-curve"></i><span class="item-quantity">x1</span></div>
                
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>
                <div class="item-slot"></div><div class="item-slot"></div><div class="item-slot"></div>

            </div>
            
            <div class="inventory-footer-info">
                <div class="panel-footer-tabs">
                    <div class="tab-item active">OBJETS</div>
                    <div class="tab-item">COSMÉTIQUES</div>
                </div>
                <div class="info-bars">71.02/<span>80</span> (Poids/Capacité)</div>
            </div>
            
        </div>
        
        <div class="character-panel">
            <div class="equipment-display">
                <div class="equipment-slots">
                    <div class="equipment-slot filled">
                        <img src="https://i.imgur.com/example_amulet.png" alt="Collier"/>
                    </div>
                    <div class="equipment-slot">Gants</div>
                    <div class="equipment-slot">Armure - Bas</div>
                    <div class="equipment-slot">Anneaux</div>
                </div>
                
                <div class="character-model-area">
                    <div class="character-model-placeholder"></div>
                </div>
                
                <div class="equipment-slots equipment-slot-right">
                    <div class="equipment-slot filled">
                        <img src="https://i.imgur.com/example_earings_gold.png" alt="Boucles"/>
                    </div>
                    <div class="equipment-slot">Bague</div>
                    <div class="equipment-slot">Armure - Haut</div>
                    <div class="equipment-slot">Bottes</div>
                </div>
            </div>
            
            <div class="equipment-slot-bottom">
                <div class="equipment-slot" style="width: 150px; height: 60px;">
                    <i class="fas fa-sword" style="font-size: 28px; color: var(--accent-color);"></i> &nbsp; Arme
                </div>
            </div>
            
        </div>
        
    </div>


</div>
        `)
})


function ToggleMenuInventaire() {
    const inventairemenu = document.getElementById("inventairemenu")
    if (inventairemenu.style.display == "grid") {
        inventairemenu.style.display = "none"
    }else{
        inventairemenu.style.display = "grid"
    }
}

Events.Subscribe("ToggleMenuInventaire", ToggleMenuInventaire)