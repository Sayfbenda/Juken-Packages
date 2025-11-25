addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforebegin", `
        <div id="characterchooser" class="characterchooser-container">
        
            <h1 class="characterchooser-title">Choisissez votre destinée</h1>

            <div class="characterchooser-cards-section">
                
                <div class="characterchooser-card">
                    <div class="characterchooser-clan-symbol"><i class="fa-solid fa-water"></i></div>
                    <h2 class="characterchooser-char-name">Kogetsu Hôzuki</h2>
                    <p class="characterchooser-char-level">Niveau 186</p>
                    <div class="characterchooser-char-image-container">
                        <i class="fa-solid fa-user-ninja characterchooser-char-placeholder" style="color: #a0a0a0;"></i>
                    </div>
                </div>

                <div class="characterchooser-card characterchooser-card-center">
                    <div class="characterchooser-clan-symbol"><i class="fa-solid fa-wind"></i></div>
                    <h2 class="characterchooser-char-name">Takai Fûma</h2>
                    <p class="characterchooser-char-level">Niveau 60</p>
                    <div class="characterchooser-char-image-container">
                        <i class="fa-solid fa-user-ninja characterchooser-char-placeholder" style="color: #a0a0a0;"></i>
                    </div>
                </div>

                <div class="characterchooser-card">
                    <div class="characterchooser-clan-symbol"><i class="fa-solid fa-star"></i></div>
                    <h2 class="characterchooser-char-name">Z Hoshikaze</h2>
                    <p class="characterchooser-char-level">Niveau 315</p>
                    <div class="characterchooser-char-image-container">
                        <i class="fa-solid fa-user-secret characterchooser-char-placeholder" style="color: #a0a0a0;"></i>
                    </div>
                </div>

            </div>

        </div>
        `)

})

function ToggleCharacterChooser() {
    const characterchooser = document.getElementById("characterchooser")
    if (characterchooser.style.display == "flex") {
        characterchooser.style.display = "none"
    }else{
        characterchooser.style.display = "flex"
    }
}

Events.Subscribe("ToggleCharacterChooser", ToggleCharacterChooser)