addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="adminmenu">
<div class="flight-admin-panel">
        
        <header class="panel-header">
            <span>Juken Admin Pannel</span>
            <button title="Fermer"><i class="fas fa-times"></i></button>
        </header>

        <div class="body-container">
            <aside class="sidebar">
                <a href="#" class="nav-icon active" title="Tableau de Bord"><i class="fas fa-home"></i></a>
                <a href="#" class="nav-icon" title="Joueurs"><i class="fas fa-users"></i></a>
                <a href="#" class="nav-icon" title="Coordonnées"><i class="fas fa-map-marker-alt"></i></a>
                <a href="#" class="nav-icon" title="Téléportation"><i class="fas fa-user-friends"></i></a>
                <a href="#" class="nav-icon" title="Véhicules"><i class="fas fa-car"></i></a>
                <a href="#" class="nav-icon" title="Objets"><i class="fas fa-box"></i></a>
                <a href="#" class="nav-icon" title="Base"><i class="fas fa-warehouse"></i></a>
                <a href="#" class="nav-icon" title="Armes"><i class="fas fa-gun"></i></a>
                <a href="#" class="nav-icon" title="Audio"><i class="fas fa-volume-up"></i></a>
                <a href="#" class="nav-icon" title="Discord"><i class="fab fa-discord"></i></a>
                <a href="#" class="nav-icon" title="Github"><i class="fab fa-github"></i></a>
                <a href="#" class="nav-icon" title="Settings"><i class="fas fa-sliders-h"></i></a>
                <a href="#" class="nav-icon" title="Exit"><i class="fas fa-sign-out-alt"></i></a>
            </aside>
            
            <main class="admin-content">
                
                <section class="admin-card">
                    <div class="card-header">
                        <span class="title-text"><i class="fas fa-server"></i> Server Information</span>
                        <i class="fas fa-info-circle" title="Information sur le serveur"></i>
                    </div>
                    
                    <div class="data-grid-row">
                        <div class="data-grid-item">
                            <span class="data-label">Players:</span>
                            <span id="playerscount" class="data-value">1</span>
                        </div>
                    </div>
                    
                    <div class="btn-flex-group">
                        <button class="btn btn-success">Announcement</button>
                        <button id="kickall" class="btn btn-danger">Kick All</button>
                        <button class="btn btn-warning">Warn All</button>
                    </div>
                </section>

                <section class="admin-card">
                    <div class="card-header">
                        <span class="title-text"><i class="fas fa-crosshairs"></i> Current Coords</span>
                        <i class="fas fa-map-marker-alt" title="Votre position actuelle"></i>
                    </div>
                    
                    <div class="data-grid-row">
                        <div class="data-grid-item">
                            <span class="data-label">Coords:</span>
                            <span class="data-value coords-value">-2652.799, 1721.204, 140.648</span>
                        </div>
                        <div class="data-grid-item">
                            <span class="data-label">Heading:</span>
                            <span class="data-value">178.33</span>
                        </div>
                    </div>

                    <div class="btn-flex-group">
                        <button class="btn btn-primary">Copy coords</button>
                        <button class="btn btn-primary">Set coords</button>
                        <button class="btn btn-primary">Save Location</button>
                    </div>
                </section>

                <section class="admin-card">
                    <div class="card-header">
                        <span class="title-text"><i class="fas fa-history"></i> Last Location</span>
                        <i class="fas fa-user-tag" title="Dernière position connue"></i>
                    </div>
                    
                    <div class="data-grid-row" style="flex-direction: column;">
                        <div class="data-grid-item">
                            <span class="data-label">Name:</span>
                            <span class="data-value">test2</span>
                        </div>
                        <div class="data-grid-item">
                            <span class="data-label">Coords:</span>
                            <span class="data-value coords-value">-2548, 1910, 169</span>
                        </div>
                    </div>

                    <button class="btn btn-primary" style="margin-top: 10px; width: 100%;">Teleport</button>
                </section>

                <section class="admin-card">
                    <div class="card-header">
                        <span class="title-text"><i class="fas fa-rocket"></i> Quick Actions</span>
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                    
                    <div class="quick-actions-grid">
                        <button class="btn btn-default">TP to Marker</button>
                        <button class="btn btn-default">Noclip</button>
                        <button class="btn btn-default">Revive</button>
                        <button class="btn btn-default">Clear area</button>
                        <button class="btn btn-default">Clean ped</button>
                        <button class="btn btn-success">Heal Self</button>
                        <button class="btn btn-warning">Repair vehicle</button>
                        <button class="btn btn-danger">Delete vehicle</button>
                        <button class="btn btn-warning">Upgrade vehicle</button>
                        <button class="btn btn-default">Spawn vehicle</button>
                        <button class="btn btn-default">Time not frozen</button>
                        <button class="btn btn-default">Set Sunny</button>
                    </div>
                </section>

                <section class="admin-card">
                    <div class="card-header">
                        <span class="title-text"><i class="fas fa-dice"></i> Zone de Test (Scroll)</span>
                    </div>
                    <p style="color: var(--text-muted); padding: 10px;">Ceci est un bloc de contenu factice pour s'assurer que la barre de défilement est active et fonctionne correctement. Vous devriez pouvoir faire défiler l'interface jusqu'en bas de cette section. Si vous voyez ce texte et que vous pouvez scroller au-dessus de l'élément inférieur, la correction a fonctionné !</p>
                    <p style="color: var(--text-muted); padding: 10px;">L'erreur précédente était que le conteneur principal  ne calculait pas correctement sa hauteur disponible à cause des autres éléments Flexbox. Les ajustements sur  ont résolu ce conflit.</p>
                </section>
                

            </main>
        </div>

        <div class="bottom-ui-elements">
            <span class="title-text"><i class="fas fa-crosshairs"></i> Current Coords</span>
            <div style="display: flex; gap: 5px; align-items: center;">
                <span style="font-size: 0.85em;">Add element to chat</span>
                <button class="btn btn-primary" title="Start"><i class="fas fa-chevron-down"></i> Start <i class="fas fa-angle-down"></i></button>
                <button class="btn btn-primary" title="Settings" style="width: 30px;"><i class="fas fa-cog"></i></button>
            </div>
        </div>

    </div>
    </div>

        
        `)
        KickAll()
})

Events.Subscribe("UpdateCurentPlayersAdminMenu", function(playerscount){
    const playerscountspan = document.getElementById("playerscount")
    playerscountspan.innerText = playerscount 
})

function KickAll() {
    const kickallbtn = document.getElementById("kickall")
    kickallbtn.addEventListener("click", function(){
        console.log("test")
        Events.Call("KickallFromJS")
    })
}
