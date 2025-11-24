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
                
                <div class="menuspell-sorts-grid">
                    <div class="menuspell-spell-icon menuspell-selected">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-B">B</span>
                    </div>
                    
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-A">A</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-C">C</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-C">C</span>
                    </div>
                     <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-C">C</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-C">C</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-A">A</span>
                    </div>
                     <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-C">C</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-B">B</span>
                    </div>
                    
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-A">A</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-C">C</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-C">C</span>
                    </div>
                     <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
                    <div class="menuspell-spell-icon">
                        <div class="menuspell-spell-icon-bg"></div>
                        <span class="menuspell-spell-rank menuspell-rank-S">S</span>
                    </div>
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
            
            <div class="menuspell-right-panel">
                <div class="menuspell-detail-icon-wrapper">
                    <div class="menuspell-detail-icon">
                        <i class="fas fa-hand-sparkles"></i> 
                    </div>
                </div>
                
                <h3 class="menuspell-detail-title">Paume Spirituelle</h3>
                
                <p class="menuspell-detail-description">
                    L'utilisateur concentre son chakra dans la paume de ses mains pour soigner un allié.
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

Events.Subscribe("ToggleMenuSpell", ToggleMenuSpell)