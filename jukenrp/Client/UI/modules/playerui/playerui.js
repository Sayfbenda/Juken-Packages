addEventListener("DOMContentLoaded", function(){
    
})

Events.Subscribe("SetValuesToPlayerUi", function(icon, name, lastname, maxhealth, reiatsumax, grade){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforebegin", `
        <div class="playerui-infocard-wrapper">
        
            <div class="playerui-avatar-group">
                <div class="playerui-avatar-circle">
                    <img src="${icon}"/>
                </div>
                <div class="playerui-level-badge">LVL 05</div>
                <div class="playerui-rank-tag">${grade}</div>
            </div>

            <div class="playerui-info-content">
                
                <div class="playerui-name-currency">
                    <h2 class="playerui-player-name">${name + " " + lastname}</h2>
                    <div class="playerui-currency">
                        <i class="fa-solid fa-sack-dollar"></i>
                        <span>0</span>
                    </div>
                </div>

                <div class="playerui-stats-group">
                    
                    <div class="playerui-stat-item">
                        <div class="playerui-stat-label">
                            <i class="fa-solid fa-heart" style="color: #ff6b6b;"></i> Health
                        </div>
                        <div class="playerui-progress-bar-container">
                            <div class="playerui-progress-bar playerui-health-bar" style="width: 100%;"></div>
                        </div>
                        <span class="playerui-stat-value">${maxhealth}</span>
                    </div>

                    <div class="playerui-stat-item">
                        <div class="playerui-stat-label">
                            <i class="fa-solid fa-bolt" style="color: #4d94ff;"></i> Reiatsu
                        </div>
                        <div class="playerui-progress-bar-container">
                            <div class="playerui-progress-bar playerui-reiatsu-bar" style="width: 100%;"></div>
                        </div>
                        <span class="playerui-stat-value">${reiatsumax}</span>
                    </div>

                </div>
            </div>
        </div>
        `)
})