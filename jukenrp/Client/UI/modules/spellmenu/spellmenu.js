addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="spellmenu" class="spellmenu-container">
    
    <div class="spellmenu-tab-bar">
        <div class="spellmenu-tab-item">Jutsu</div>
        <div class="spellmenu-tab-item">Kekkei Genkai</div>
        <div class="spellmenu-tab-item">Clans</div>
        <div class="spellmenu-tab-item">Taijutsu / Kenjutsu</div>
        <div class="spellmenu-tab-item active">Autres</div>
        <div class="spellmenu-tab-item"><i class="fas fa-star"></i> Favoris</div>
    </div>

    <div class="spellmenu-main-content">
        
        <div class="spellmenu-journal">
            <div class="spellmenu-journal-header">
                <div class="spellmenu-journal-title">JOURNAL AUTRES</div>
                <div class="spellmenu-search-area">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Rechercher...">
                    <span><i class="fas fa-times"></i> Jutsus appris</span>
                </div>
            </div>
            
            <div class="spellmenu-journal-subtitle">Autres jutsus</div>

            <div id="spellmenudiv" class="spellmenu-spell-grid">
                
            </div>
        </div>

        <div class="spellmenu-spell-details">
             <div class="spellmenu-detail-circle"></div>
            <div class="spellmenu-detail-icon">
                <i class="fas fa-hand-holding-heart"></i>
            </div>
            
            <div class="spellmenu-detail-title">Paume Spirituelle</div>
            
            <div class="spellmenu-detail-description">
                L'utilisateur concentre son chakra dans la paume de ses mains pour soigner un allié. La quantité de soins est proportionnelle au niveau de Chakra actuel.
            </div>
            
            <div class="spellmenu-detail-upgrade">
                Améliorations <span style="color: #2ecc71;">3/3</span>
            </div>
            
            <div class="spellmenu-detail-cooldown">
                Cooldown : <span style="color: #00bcd4;">60s</span>
            </div>
        </div>
        
    </div>
    
    <div class="spellmenu-hotbar">
        <div class="spellmenu-hotbar-slot selected">
            <span class="spellmenu-key-bind">1</span>
            <i class="fas fa-hand-holding-heart" style="color: #2ecc71;"></i>
        </div>
        <div class="spellmenu-hotbar-slot">
            <span class="spellmenu-key-bind">2</span>
            <i class="fas fa-wind" style="color: #3498db;"></i>
        </div>
        <div class="spellmenu-hotbar-slot">
            <span class="spellmenu-key-bind">3</span>
            <i class="fas fa-bolt" style="color: #f1c40f;"></i>
        </div>
        <div class="spellmenu-hotbar-slot">
            <span class="spellmenu-key-bind">4</span>
            <i class="fas fa-water" style="color: #9b59b6;"></i>
        </div>
        <div class="spellmenu-hotbar-slot">
            <span class="spellmenu-key-bind">5</span>
            <i class="fas fa-fire-alt" style="color: #e74c3c;"></i>
        </div>
        <div class="spellmenu-hotbar-slot">
            <span class="spellmenu-key-bind">6</span>
            <i class="fas fa-star-of-david" style="color: #e67e22;"></i>
        </div>
    </div>

</div>

<div class="spell-hotbar-container">
    
    <div class="hotbar-spell-slot disabled">
        <span class="hotbar-key-bind">1</span>
        <div class="hotbar-cooldown-overlay" style="height: 40%;"></div> <div class="hotbar-cooldown">39</div>
        <i class="fas fa-hand-fist hotbar-spell-icon"></i>
        <span class="hotbar-chakra-cost">100</span>
    </div>

    <div class="hotbar-spell-slot disabled">
        <span class="hotbar-key-bind">2</span>
        <div class="hotbar-cooldown-overlay" style="height: 60%;"></div> 
        <div class="hotbar-cooldown">46</div>
        <i class="fas fa-wind hotbar-spell-icon"></i>
        <span class="hotbar-chakra-cost">120</span>
    </div>

    <div class="hotbar-spell-slot disabled">
        <span class="hotbar-key-bind">3</span>
        <div class="hotbar-cooldown-overlay" style="height: 20%;"></div>
        <div class="hotbar-cooldown">87</div>
        <i class="fas fa-bolt hotbar-spell-icon"></i>
        <span class="hotbar-chakra-cost">150</span>
    </div>

    <div class="hotbar-spell-slot disabled"> <span class="hotbar-key-bind">4</span>
        <div class="hotbar-cooldown-overlay" style="height: 0%;"></div>
        <i class="fas fa-long-arrow-alt-right hotbar-spell-icon"></i> <span class="hotbar-chakra-cost">90</span>
    </div>

    <div class="hotbar-spell-slot disabled"> <span class="hotbar-key-bind">5</span>
        <div class="hotbar-cooldown-overlay" style="height: 0%;"></div>
        <i class="fas fa-long-arrow-alt-right hotbar-spell-icon"></i> <span class="hotbar-chakra-cost">90</span>
    </div>

    <div class="hotbar-spell-slot disabled">
        <span class="hotbar-key-bind">6</span>
        <div class="hotbar-cooldown-overlay" style="height: 0%;"></div>
        <i class="fas fa-dragon hotbar-spell-icon"></i>
        <span class="hotbar-chakra-cost">200</span>
    </div>

</div>

        `)

})

const spells = document.querySelectorAll(".spellmenu-spell-icon")
spells.forEach(element => {
    element.addEventListener("click", function(e){
        console.log("un spell a été cliqué")
    })
});




Events.Subscribe("ToggleSpellMenu", function(){
    const spellmenu = document.getElementById("spellmenu")
    if (spellmenu.style.display == "grid") {
        spellmenu.style.display = "none"
    }else{
        spellmenu.style.display = "grid"
    }
})

Events.Subscribe("AddSpellsToSpellMenu", function(spells){
    const spellmenudiv = document.getElementById("spellmenudiv")
    spells.forEach(element => {
        spellmenudiv.insertAdjacentHTML("beforeend", `
            <div draggable="true" class="spellmenu-spell-icon color-2" data-target="${element.id}"><i class="fas fa-hand-holding-heart"></i><div class="spellmenu-spell-rank rank-s">${element.categorie}</div></div>
            `)
    });
})

Events.Subscribe("GetSelectedSpell", function(){
    const selectedspell = document.getElementsByClassName("spell-selected")
    const id = selectedspell.getAttribute('data-target')
    Events.Call("LunchSpellWithID", id)
})

Events.Subscribe("SelectSpell", function(index){
    const spellsinbar = document.querySelectorAll(".hotbar-spell-slot")
    spellsinbar.forEach(element => {
        element.classList.remove("selected")
        element.classList.add("disabled")
    });
    spellsinbar[index].classList.remove("disabled")
    spellsinbar[index].classList.add("selected")
})
