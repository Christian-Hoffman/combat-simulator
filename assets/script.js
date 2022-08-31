
var phase1 = document.querySelector("#phase1");
var phase2 = document.querySelector("#phase2");
var phase3 = document.querySelector("#phase3");

var screenSelector = function(state){


    if(state == 1){

        // phase2.setAttribute("display", "none")
        phase1.style.display = "flex";
        phase2.style.display = "none";
        phase3.style.display = "none";
    }
    else if(state == 2){
        phase1.style.display = "none";
        phase2.style.display = "flex";
        phase3.style.display = "none";
    }
    else if(state == 3){
        phase1.style.display = "none";
        phase2.style.display = "none";
        phase3.style.display = "flex";
    }


}

screenSelector(1);

var weapons = [];
var choice1 = false;
var choice2 = false;
var choice3 = false;



phase1.addEventListener("click", function(event){
 
    var click = event.target.id;

    if(click == "bone"){
        choice1 = true;
        weapons.push("bone");
        screenSelector(2)
    }
    else if (click == "hero"){
        choice2 = true;
        weapons.push("hero");
        screenSelector(2)
    }
    else if(click == "demon"){
        choice3 = true;
        weapons.push("demon");
        screenSelector(2)
    }

    

    if(choice1){
        document.querySelector("#natureArea").classList.add("d-none");
    }
    if(choice2){
        document.querySelector("#healingArea").classList.add("d-none");
    }
    if(choice3){
        document.querySelector("#fireArea").classList.add("d-none");
    }

})


phase2.addEventListener("click", function(event){
    var click = event.target.id;
    if(click == "nature"){
        choice1 = true;
        weapons.push("nature");
        screenSelector(3);
    }
    else if(click == "healing"){
        choice2 = true;
        weapons.push("healing");
        screenSelector(3);
    }
    else if(click == "fire"){
        choice3 = true;
        weapons.push("fire");
        screenSelector(3);
    }

    if(choice1){
        document.querySelector("#smallArea").classList.add("d-none");
    }
    if(choice2){
        document.querySelector("#mediumArea").classList.add("d-none");
    }
    if(choice3){
        document.querySelector("#bodyArea").classList.add("d-none");
    }

})

phase3.addEventListener("click", function(event){
    var click = event.target.id;

    if(click == "small"){
        weapons.push("small");
    }

    else if(click == "medium"){
        weapons.push("medium");
    }
    else if(click == "body"){
        weapons.push("body");
    }



    localStorage.setItem("weapons", JSON.stringify(weapons));
    window.location.replace("battle.html");
})

