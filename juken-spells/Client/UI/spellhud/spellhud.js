addEventListener("DOMContentLoaded", function(event){
    const body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin",`
        <section id="sectionspell">
            <div id="barspell">
                <div id="first-spell">
                
                </div>
                <div id="second-spell">
                
                </div>
                <div id="third-spell">
                
                </div>
                <div id="fourth-spell">
                
                </div>
                <div id="five-spell">
                
                </div>
                <div id="sixth-spell">
                
                </div>
            </div>
        </section>
        `)
})

function AddSizeStyleToDiv(index) {
    if (index == 1) {
        console.log("test")
        const div = document.getElementById("first-spell")
        div.classList.add("selectedspell")
    }
}

Events.Subscribe("AddSizeStyleToDiv", AddSizeStyleToDiv)