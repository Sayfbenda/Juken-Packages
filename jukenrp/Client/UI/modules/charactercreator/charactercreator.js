addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
            <div id="creatorMenu">
                <div id="FirstCharacter">

                </div>
                <div id="SecondCharacter">

                </div>
                <div id="ThridCharacter">

                </div>
            </div>
        `)

        const div = document.getElementById("creatorMenu")
        const divs = div.children
        AddOnclickOnDivs(div.children, div.children.length)
})

function AddOnclickOnDivs(divs, length) {
    for (let index = 0; index < length; index++) {
        divs[index].addEventListener("click", function(e){
            
        })
        
    }
}

Events.Subscribe("AddCharacters", function(){

})