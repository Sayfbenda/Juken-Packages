addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="adminmenu" class="adminmenu-admin-wrapper">
        
        <header class="adminmenu-admin-header">
            <div class="adminmenu-admin-title">Juken Admin Pannel</div>
            <i class="fa-solid fa-xmark adminmenu-admin-close"></i>
        </header>

        <div class="adminmenu-admin-main">
            
            <aside class="adminmenu-admin-sidebar">
                <div class="adminmenu-nav-item adminmenu-active" title="Accueil" data-target="adminmenuacceuil-page" ><i class="fa-solid fa-house"></i></div>
                <div class="adminmenu-nav-item" title="Joueurs" data-target="adminmenujoueurs-page" ><i class="fa-solid fa-users"></i></div>
                <div class="adminmenu-nav-item" title="Paramètres" data-target="parametre-page" ><i class="fa-solid fa-sliders"></i></div>
                <div class="adminmenu-nav-item" title="Déconnexion" data-target="deco-page" style="margin-top: auto; margin-bottom: 10px;"><i class="fa-solid fa-right-from-bracket"></i></div>
            </aside>

            <main class="adminmenu-admin-content">
                
                <div id="adminmenuacceuil-page" class="adminmenu-page adminmenu-page-active" > 
                    <div class="adminmenu-section">
                        <div class="adminmenu-section-header">
                            <div class="adminmenu-section-title">
                                <i class="fa-solid fa-server"></i> Server Information
                            </div>
                            <i class="fa-solid fa-info-circle adminmenu-info-icon"></i>
                        </div>

                        <div class="adminmenu-stat-line">
                            <span class="adminmenu-stat-label">Players:</span>
                            <span class="adminmenu-stat-value">1</span>
                        </div>

                        <div class="adminmenu-button-group">
                            <button class="adminmenu-btn adminmenu-btn-green">Announcement</button>
                            <button class="adminmenu-btn adminmenu-btn-red">Kick All</button>
                            <button class="adminmenu-btn adminmenu-btn-orange">Warn All</button>
                        </div>
                    </div>
                    
                    <div class="adminmenu-section">
                        <div class="adminmenu-section-header">
                            <div class="adminmenu-section-title">
                                <i class="fa-solid fa-location-crosshairs"></i> Current Coords
                            </div>
                            <i class="fa-solid fa-location-dot adminmenu-info-icon"></i>
                        </div>
                        
                        <div class="adminmenu-stat-line">
                            <span class="adminmenu-stat-label">Coord</span>
                            <span class="adminmenu-coords-text">Vector(X = 1301.5175734662, Y = 2295.1688905867, Z = 98.149998188019)</span>
                        </div>

                        <div class="adminmenu-button-group">
                            <button class="adminmenu-btn adminmenu-btn-blue">Réafrichir</button>
                            <button class="adminmenu-btn adminmenu-btn-blue">Set coords</button>
                        </div>
                    </div>

                    <div class="adminmenu-section">
                        <div class="adminmenu-section-header">
                            <div class="adminmenu-section-title">
                                <i class="fa-solid fa-rocket"></i> Actions rapides
                            </div>
                            <i class="fa-solid fa-angles-right adminmenu-quick-actions-arrows"></i>
                        </div>

                        <div class="adminmenu-button-group">
                            <button class="adminmenu-btn adminmenu-btn-dark">Noclip</button>
                            <button class="adminmenu-btn adminmenu-btn-dark">Revive</button>
                            <button class="adminmenu-btn adminmenu-btn-green">Se Heal</button>
                        </div>
                    </div>
                    

                </div>
                <div id="adminmenujoueurs-page" class="adminmenu-page">
                        
                </div>
            </main>
        </div>
    </div>
        
        `)
const asideElements = document.querySelectorAll(".adminmenu-nav-item")
const adminmenupages = document.querySelectorAll(".adminmenu-page")

asideElements.forEach(element => {
    element.addEventListener("click", function(e){
        asideElements.forEach(element => {
            const id = e.target.getAttribute('data-target')
            const page = document.getElementById(id)
            console.log(id)
            console.log(id)
            adminmenupages.forEach(element => {
                element.classList.remove("adminmenu-page-active")
                page.classList.add("adminmenu-page-active")
            });
            element.classList.remove("adminmenu-active")
            
        });
        e.target.classList.add("adminmenu-active")
        console.log(e.target.classList)
    })
});
})

Events.Subscribe("ToggleAdminMenu", function(){
    const adminmenu = document.getElementById("adminmenu")
    if (adminmenu.style.display == "flex") {
        adminmenu.style.display = "none"
    }else{
        adminmenu.style.display = "flex"
    }
})

Events.Subscribe("AddPlayerToAdminMenu", function(playername, accountname, steamid, accountid, id){
    const adminmenujoueurspage = document.getElementById("adminmenujoueurs-page")
    adminmenujoueurspage.insertAdjacentHTML("afterbegin", `
                        <div class="adminmenu-section">
                            <div class="adminmenu-section-header">
                                <div class="adminmenu-section-title">
                                    ${playername}
                                </div>
                                <i class="fa-solid fa-info-circle adminmenu-info-icon"></i>
                            </div>

                            <div class="adminmenu-stat-line">
                                <span class="adminmenu-stat-label">ID :</span>
                                <span class="adminmenu-stat-value">${id}</span>
                            </div>
                            
                            <div class="adminmenu-stat-line">
                                <span class="adminmenu-stat-label">Account Name :</span>
                                <span class="adminmenu-stat-value">${accountname}</span>
                            </div>
                            
                            <div class="adminmenu-stat-line">
                                <span class="adminmenu-stat-label">Steam ID :</span>
                                <span class="adminmenu-stat-value">${steamid}</span>
                            </div>
                            
                            <div class="adminmenu-stat-line">
                                <span class="adminmenu-stat-label">Account ID :</span>
                                <span class="adminmenu-stat-value">${accountid}</span>
                            </div>

                            <div class="adminmenu-button-group">
                                <button class="adminmenu-btn adminmenu-btn-green">Announcement</button>
                                <button class="adminmenu-btn adminmenu-btn-red">Kick All</button>
                                <button class="adminmenu-btn adminmenu-btn-orange">Warn All</button>
                            </div>
                        </div>
        `)
})