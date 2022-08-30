var state = 3;
var screenSelector = function(state){
    var phase1 = document.querySelector("#phase1");
    var phase2 = document.querySelector("#phase2");
    var phase3 = document.querySelector("#phase3");


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

screenSelector(state);