addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="menuspelldiv" class="menuspell-container">
        
        <div class="menuspell-header">
            <ul class="menuspell-nav-list">
                <li class="menuspell-nav-item"><i class="menuspell-nav-icon fas fa-hat-wizard"></i>Jutsu</li>
                <li class="menuspell-nav-item"><i class="menuspell-nav-icon fas fa-gem"></i>Kekkei Genkai</li>
                <li class="menuspell-nav-item"><i class="menuspell-nav-icon fas fa-users"></i>Clans</li>
                <li class="menuspell-nav-item"><i class="menuspell-nav-icon fas fa-fist-raised"></i>Taijustu / Kenjutsu</li>
                <li class="menuspell-nav-item menuspell-active"><i class="menuspell-nav-icon fas fa-plus-circle"></i>Autres</li>
                <li class="menuspell-nav-item"><i class="menuspell-nav-icon fas fa-star"></i>Favoris</li>
            </ul>
            <button onclick="ToggleMenuSpell()" class="menuspell-close-btn"><i class="fas fa-times"></i></button>
        </div>

        <div class="menuspell-main-content">
            
            <div class="menuspell-left-panel">
                
                <div class="menuspell-journal-title">
                    <i class="fas fa-book-open"></i>
                    <h2>JOURNAL AUTRES</h2>
                </div>
                <p class="menuspell-journal-subtitle">Autres jutsus</p>
                
                <div class="menuspell-search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text" class="menuspell-search-input" placeholder="Rechercher...">
                </div>
                
                <div id="menuspell-sorts-list" class="menuspell-sorts-grid">
                    

                </div>
                
                <div class="menuspell-quick-bar">
                    <div class="menuspell-quick-bar-settings"><i class="fas fa-cog"></i></div>
                    <div class="menuspell-quick-slots">
                        <div class="menuspell-quick-slot menuspell-filled">
                            <span class="menuspell-quick-slot-number">1</span>
                        </div>
                        <div class="menuspell-quick-slot menuspell-filled">
                            <span class="menuspell-quick-slot-number">2</span>
                        </div>
                        <div class="menuspell-quick-slot menuspell-filled">
                            <span class="menuspell-quick-slot-number">3</span>
                        </div>
                        <div class="menuspell-quick-slot menuspell-filled">
                            <span class="menuspell-quick-slot-number">4</span>
                        </div>
                        <div class="menuspell-quick-slot menuspell-filled">
                            <span class="menuspell-quick-slot-number">5</span>
                        </div>
                        <div class="menuspell-quick-slot menuspell-filled">
                            <span class="menuspell-quick-slot-number">6</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="left-description">
                
            </div>
        </div>
    </div>
        `)
})


function ToggleMenuSpell() {
    const menuspell = document.getElementById("menuspelldiv")
    if (menuspell.style.display == "block") {
        menuspell.style.display = "none"
    }else{
        menuspell.style.display = "block"
    }
}

addEventListener("dragstart", function(e){
    console.log(e.target)
})

Events.Subscribe("ToggleMenuSpell", ToggleMenuSpell)

Events.Subscribe("AddSpellsTolist", function(spellslist){
    console.log(spellslist[0].image)
    const menuspellsortsdiv = document.getElementById("menuspell-sorts-list")
    for (let index = 0; index < spellslist.length; index++) {
        menuspellsortsdiv.insertAdjacentHTML("beforeend", `
            <div class="menuspell-spell-icon" data-target="${spellslist[index].id}" draggable="true">
                <div class="menuspell-spell-icon-bg" style="background-image: url(${spellslist[index].image}); background-size: cover;" draggable="false"></div>
                <span class="menuspell-spell-rank menuspell-rank-${spellslist[index].rang}">${spellslist[index].rang}</span>
            </div>
            `)
        
    }
    testeee()
})

function testeee() {
    const spellsclick = document.querySelectorAll(".menuspell-spell-icon")
    spellsclick.forEach(element => {
    element.addEventListener("click", function(e){
        const menuspellrightpanel = document.querySelectorAll(".menuspell-right-panel-active")
        menuspellrightpanel.forEach(el=>{
            el.classList.remove("menuspell-right-panel-active")
        })
        spellsclick.forEach(elem =>{
            elem.classList.remove("menuspell-selected")
        })

        const attribute = e.target.parentElement.getAttribute('data-target')
        const targetid = attribute + "-page"

        const target = document.getElementById(targetid)
        target.classList.add("menuspell-right-panel-active")
        e.target.parentElement.classList.add("menuspell-selected")
    })
});
}

Events.Subscribe("AddSpellsToleftPart", function(spellslist){
    const lefdiscriptiondiv = document.getElementById("left-description")
    for (let index = 0; index < spellslist.length; index++) {
        lefdiscriptiondiv.insertAdjacentHTML("beforeend", `
            <div id="${spellslist[index].id}-page" class="menuspell-right-panel">
                        <div class="menuspell-detail-icon-wrapper">
                            <div class="menuspell-detail-icon" style="background-image: url(${spellslist[index].image}); background-size: cover;">
                            </div>
                        </div>
                        
                        <h3 class="menuspell-detail-title">${spellslist[index].nom}</h3>
                        
                        <p class="menuspell-detail-description">
                            ${spellslist[index].description}
                        </p>
                        
                        <div class="menuspell-detail-info">
                            <div class="menuspell-detail-line">
                                <span class="menuspell-detail-label">Améliorations :</span>
                                <span class="menuspell-detail-value">3/3</span>
                            </div>
                            <div class="menuspell-upgrade-bar-wrapper">
                                <div class="menuspell-upgrade-segment menuspell-filled"></div>
                                <div class="menuspell-upgrade-segment menuspell-filled"></div>
                                <div class="menuspell-upgrade-segment menuspell-filled"></div>
                            </div>
                            
                            <div class="menuspell-detail-line" style="margin-top: 20px;">
                                <span class="menuspell-detail-label">Cooldown :</span>
                                <span class="menuspell-detail-value">60s</span>
                            </div>
                        </div>
                    </div>
            `)   
    }
})

