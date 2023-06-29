// TODO: add code here

window.addEventListener("load",function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.astronauts").then(function(response){
        response.json().then(function(astronauts){
            console.log(astronauts)
            const id=document.getElementById("container");
            for(let i=0;i<astronauts.length;i++){
            id.innerHTML +=`
            <div class="astronaut">
                <div class="bio">
                <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
             <ul>
                <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                <li>Active: ${astronauts[i].active}</li>
                <li>Skills: ${astronauts[i].skills.join(",")}</li>
            </ul>
            </div>
            <img class="avatar" src="images/mae-jemison.jpg">
            </div>`
            }
        })
    })
})