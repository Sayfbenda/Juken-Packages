

addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", `
        
            <div id="carddiv" class="card">
        <h2 class="card-title">Change Values for Sayf (ID: 1)</h2>
            <div class="form-row">
                <div class="input-group">
                    <label for="money">Money</label>
                    <input type="text" id="money" value="15000">
                </div>
                <div class="input-group">
                    <label for="health">Health</label>
                    <input type="text" id="health" value="100">
                </div>
            </div>

            <div class="form-group">
                <label for="rank">Rank</label>
                <select id="rank">
                    <option value="moderator" selected>Moderator</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>

            <div class="form-group toggle-group">
                <label for="isBanned">Is Banned</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="isBanned">
                    <span class="slider round"></span>
                </label>
            </div>

            <div class="form-group">
                <label for="reason">Reason (Optional)</label>
                <textarea id="reason" rows="4" placeholder="Enter reason for changes..."></textarea>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn-cancel">Cancel</button>
                <button type="submit" class="btn-apply">APPLY CHANGES</button>
            </div>
    </div>
        
        `)
})

function ToggleChangeValuesMenu() {
    const carddiv = document.getElementById("carddiv")
    if (carddiv.style.display == "block") {
        carddiv.style.display = "none"
    }else{
        carddiv.style.display = "block"
    }
}

Events.Subscribe("ToggleChangeValuesMenu", ToggleChangeValuesMenu)