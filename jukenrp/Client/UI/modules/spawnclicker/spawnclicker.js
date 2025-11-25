addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        <div id="spawnclicker" class="overlay-screen">
            <div class="content">
                <div class="icon-box">
                    <i class="fa-solid fa-play"></i>
                </div>
                <h1>Appuyez pour continuer</h1>
                <p>Cliquez n'importe où</p>
            </div>
        </div>
        `)

    const spawnclicker = document.getElementById("spawnclicker")
    spawnclicker.addEventListener("click", function(e){
        e.target.style.display = "none"
        Events.Call("DisplayCharacterChooserMenu")
    })
})

