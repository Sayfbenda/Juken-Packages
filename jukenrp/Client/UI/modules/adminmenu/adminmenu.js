addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="adminmenu">
    <div class="flight-admin-panel">
        
        <header class="panel-header">
            <span>Juken Admin Pannel</span>
            <button onclick="ToggleAdminMenu()" title="Fermer"><i class="fas fa-times"></i></button>
        </header>

        <div class="body-container">
            <aside class="sidebar">
                <a href="#" class="nav-icon active" data-target="dashboard" title="Tableau de Bord"><i class="fas fa-home"></i></a>
                <a href="#" class="nav-icon" data-target="players" title="Joueurs"><i class="fas fa-users"></i></a>
                <a href="#" class="nav-icon" data-target="personnages" title="Personnages"><i class="fa-solid fa-user"></i></a>
                <a href="#" class="nav-icon" data-target="settings" title="Settings"><i class="fas fa-sliders-h"></i></a>
                <a href="#" class="nav-icon" data-target="exit" title="Exit"><i class="fas fa-sign-out-alt"></i></a>
            </aside>
            
            <main class="admin-content">
                
                <div id="dashboard-page" class="content-page active-content">
                    
                    <section class="admin-card">
                        <div class="card-header">
                            <span class="title-text"><i class="fas fa-server"></i> Server Information</span>
                            <i class="fas fa-info-circle" title="Information sur le serveur"></i>
                        </div>
                        
                        <div class="data-grid-row">
                            <div class="data-grid-item">
                                <span class="data-label">Players:</span>
                                <span id="playerscount" class="data-value">0</span>
                            </div>
                        </div>
                        
                        <div class="btn-flex-group">
                            <button class="btn btn-success">Announcement</button>
                            <button onclick="KickAll()" class="btn btn-danger">Kick All</button>
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
                                <span id="refreshcoords" class="data-value coords-value">0, 0, 0</span>
                            </div>
                        </div>

                        <div class="btn-flex-group">
                            <button onclick="GetCoords()" class="btn btn-primary">Réafrichir</button>
                            <button class="btn btn-primary">Set coords</button>
                        </div>
                    </section>

                    <section class="admin-card">
                        <div class="card-header">
                            <span class="title-text"><i class="fas fa-rocket"></i> Actions rapides</span>
                            <i class="fas fa-angle-double-right"></i>
                        </div>
                        
                        <div class="quick-actions-grid">
                            <button onclick="ToggleNoClipFromJS()" class="btn btn-default">Noclip</button>
                            <button onclick="ReviveFromMenu()" class="btn btn-default">Revive</button>
                            <button class="btn btn-success">Se Heal</button>
                        </div>
                    </section>

                </div>
                
                <div id="players-page" class="content-page" style="display: none;">

                </div>

                <div id="personnages-page" class="content-page" style="display: none;">

                </div>
                
                <div id="settings-page" class="content-page" style="display: none;">
                    <section class="admin-card">
                        <div class="card-header">
                            <span class="title-text"><i class="fas fa-sliders-h"></i> Paramètres du Panel</span>
                            <i class="fas fa-cog"></i>
                        </div>
                        <p style="color: var(--text-muted);">Options d'affichage, préférences utilisateur, sécurité. (En développement)</p>
                        <div class="data-grid-row" style="padding-top: 10px;">
                            <span class="data-label">Mode Sombre:</span>
                            <button class="btn btn-default">Toggle</button>
                        </div>
                    </section>
                </div>
                
                <div id="exit-page" class="content-page" style="display: none;">
                    <section class="admin-card">
                        <div class="card-header">
                            <span class="title-text"><i class="fas fa-sign-out-alt"></i> Confirmation</span>
                            <i class="fas fa-warning" style="color: var(--btn-danger);"></i>
                        </div>
                        <p style="color: var(--text-muted);">Êtes-vous sûr de vouloir quitter le panel d'administration?</p>
                        <button class="btn btn-danger" style="margin-top: 10px; width: 100%;">Confirmer la Déconnexion</button>
                    </section>
                </div>
                
                
            </main>
        </div>

        <div class="bottom-ui-elements">
            <div style="display: flex; gap: 5px; align-items: center;">
                
            </div>
        </div>

    </div>
</div>
        
        `)


const navIcons = document.querySelectorAll('.nav-icon');
    const contentPages = document.querySelectorAll('.content-page');
        contentPages.forEach(page => {
            if (!page.classList.contains('active-content')) {
                page.style.display = 'none';
            } else {
                page.style.display = 'block';
            }
        });

        navIcons.forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                
                navIcons.forEach(item => item.classList.remove('active'));
                this.classList.add('active');

                const targetName = this.getAttribute('data-target');
                const targetId = targetName + '-page';
                
                contentPages.forEach(page => {
                    page.style.display = 'none';
                    page.classList.remove('active-content');
                });

                const targetPage = document.getElementById(targetId);
                if (targetPage) {
                    targetPage.style.display = 'block';
                    targetPage.classList.add('active-content');
                    
                    if (targetName === 'exit') {
                        
                    }
                }
            });
        });
})

Events.Subscribe("UpdatePlayersAdminMenu", function(players){

    UpdatePlayerCount(players.length)


    UpdatePlayersGestionList(players)

})

function UpdatePlayersGestionList(players) {
    
    const playerspage = document.getElementById("players-page")
    
    for (let index = 0; index < players.length; index++) {
        playerspage.insertAdjacentHTML("beforeend", `
                    <section class="admin-card">
                        <div class="card-header">
                            <span class="title-text"><i class="fa-solid fa-user"></i> ${players[index].name}</span>
                            <i class="fas fa-info-circle" title="Information sur le serveur"></i>
                        </div>
                        
                        <div class="data-grid-column">
                            <div class="data-grid-item">
                                <span class="data-label">ID:</span>
                                <span id="playerscount" class="data-value">${players[index].id}</span>
                            </div>
                            <div class="data-grid-item">
                                <span class="data-label">SteamID:</span>
                                <span id="playerscount" class="data-value">${players[index].steamid}</span>
                            </div>
                        </div>
                        
                        <div class="quick-actions-grid">
                            <button class="btn btn-success">Change Values</button>
                            <button class="btn btn-default">Teleport to</button>
                            <button onclick="KickAll()" class="btn btn-danger">Ban</button>
                            <button class="btn btn-warning">Kick</button>
                        </div>
                    </section>

            `)

    }

}


function UpdatePlayerCount(playerscount) {

    const playerscountspan = document.getElementById("playerscount")
    playerscountspan.innerText = playerscount

}

function ToggleNoClipFromJS(){
    Events.Call("ToggleNoClipFromJS")
}

Events.Subscribe("UpdateCoordsInMenu", function(coords){
    const refreshcoords = document.getElementById("refreshcoords")
    refreshcoords.innerText = coords
})

function GetCoords() {
    Events.Call("GetCharacterLocation")
}

function ToggleAdminMenu() {
    const adminmenu = document.getElementById("adminmenu")
    if (adminmenu.style.display == "block") {
        adminmenu.style.display = "none"
    }else{
        adminmenu.style.display = "block"
    }
}

Events.Subscribe("GetCharatersbyDB", function(characters){
    for (let index = 0; index < characters.length; index++) {
        const displayedname = characters[index].name + " " + characters[index].lastname
        AddCharatersToAdminMenu(displayedname, characters[index].grade, characters[index].id, characters[index].playersteamid, characters[index].genre)
    }
})

function AddCharatersToAdminMenu(displayedname, grade, id, steamid, genre) {
    const personnagespage = document.getElementById("personnages-page")
    personnagespage.insertAdjacentHTML("beforeend", `
                    <section class="admin-card">
                        <div class="card-header">
                            <span class="title-text"><i class="fa-solid fa-user"></i> ${displayedname}</span>
                            <i class="fas fa-info-circle" title="Information sur le serveur"></i>
                        </div>
                        
                        <div class="data-grid-column">
                            <div class="data-grid-item">
                                <span class="data-label">Grade:</span>
                                <span id="playerscount" class="data-value">${grade}</span>
                            </div>
                            <div class="data-grid-item">
                                <span class="data-label">Id:</span>
                                <span id="playerscount" class="data-value">${id}</span>
                            </div>
                            <div class="data-grid-item">
                                <span class="data-label">Steamid:</span>
                                <span id="playerscount" class="data-value">${steamid}</span>
                            </div>
                            <div class="data-grid-item">
                                <span class="data-label">Genre :</span>
                                <span id="playerscount" class="data-value">${genre}</span>
                            </div>
                        </div>
                        
                        <div class="quick-actions-grid">
                            <button class="btn btn-success">Change Values</button>
                            <button class="btn btn-default">Teleport to</button>
                            <button onclick="KickAll()" class="btn btn-danger">Ban</button>
                            <button class="btn btn-warning">Kick</button>
                        </div>
                    </section>
        
        `)
}

function KickAll() {
    Events.Call("KickallFromJS")
}

function ReviveFromMenu() {
    Events.Call("ReviveFromMenu")
}

Events.Subscribe("ToggleAdminMenu", ToggleAdminMenu)