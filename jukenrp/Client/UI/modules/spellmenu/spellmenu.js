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
            <div draggable="true" class="spellmenu-spell-icon" data-target="${element.id}"><img data-target="${element.id}" src="${element.image}"/><div class="spellmenu-spell-rank rank-s">${element.categorie}</div></div>
            `)
    });
    addEventListenerToSpells()
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

const spells = document.querySelectorAll(".spellmenu-spell-icon")
console.log(spells)

function addEventListenerToSpells() {
    const spellIcons  = document.querySelectorAll(".spellmenu-spell-icon")
    const hotbarSlots  = document.querySelectorAll(".hotbar-spell-slot")
    spellIcons.forEach(icon => {
        icon.setAttribute('draggable', true);

        icon.addEventListener('dragstart', (e) => {
            console.log(e.target.getAttribute('data-target'))
            e.dataTransfer.setData('text/plain', e.target.src);
            e.dataTransfer.setData('data-target', e.target.getAttribute('data-target'));
            e.target.classList.add('dragging');
        });

        icon.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });

    hotbarSlots.forEach(slot => {
        slot.addEventListener('dragover', (e) => {
            e.preventDefault();
            slot.classList.add('drag-over');
        });

        slot.addEventListener('dragleave', () => {
            slot.classList.remove('drag-over');
        });

        slot.addEventListener('drop', (e) => {
            console.log("test")
            e.preventDefault();
            slot.classList.remove('drag-over');

            const iconSrc = e.dataTransfer.getData('text/plain');
            slot.style.backgroundImage = `url(${iconSrc})`;
            slot.setAttribute('data-target', e.dataTransfer.getData('data-target'))
            slot.innerHTML = ''; 
        });
    });
}