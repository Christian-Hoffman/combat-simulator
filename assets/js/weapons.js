var weaponPhotos = [];

// weapon selection phases
var phase1 = document.querySelector("#phase1");
var phase2 = document.querySelector("#phase2");
var phase3 = document.querySelector("#phase3");

var screenSelector = function (state) {
    if (state == 1) {
        phase1.style.display = "flex";
        phase2.style.display = "none";
        phase3.style.display = "none";
    }
    else if (state == 2) {
        phase1.style.display = "none";
        phase2.style.display = "flex";
        phase3.style.display = "none";
    }
    else if (state == 3) {
        phase1.style.display = "none";
        phase2.style.display = "none";
        phase3.style.display = "flex";
    }
}
//init screen
screenSelector(1);
var weapons = [];
var choice1 = false;
var choice2 = false;
var choice3 = false;

// adds sword choice to localStorage
phase1.addEventListener("click", function (event) {
    var click = event.target.id;
    if (click == "bone") {
        choice1 = true;
        weapons.push("Bone");
        weaponPhotos.push('bswrd');
        screenSelector(2)
    }
    else if (click == "hero") {
        choice2 = true;
        weapons.push("Hero");
        weaponPhotos.push('hswrd');
        screenSelector(2)
    }
    else if (click == "demon") {
        choice3 = true;
        weapons.push("Demon");
        weaponPhotos.push('dswrd');
        screenSelector(2)
    }
    //removes chosen tier option for next page
    if (choice1) {
        document.querySelector("#natureArea").classList.add("d-none");
    }
    if (choice2) {
        document.querySelector("#healingArea").classList.add("d-none");
    }
    if (choice3) {
        document.querySelector("#fireArea").classList.add("d-none");
    }
})

// adds staff choice to localStorage
phase2.addEventListener("click", function (event) {
    var click = event.target.id;
    if (click == "nature") {
        choice1 = true;
        weapons.push("Nature");
        weaponPhotos.push('nstff');
        screenSelector(3);
    }
    else if (click == "healing") {
        choice2 = true;
        weapons.push("Healing");
        weaponPhotos.push('hstff');
        screenSelector(3);
    }
    else if (click == "fire") {
        choice3 = true;
        weapons.push("Fire");
        weaponPhotos.push('fstff');
        screenSelector(3);
    }
    //removes chosen tier option for next page
    if (choice1) {
        document.querySelector("#smallArea").classList.add("d-none");
    }
    if (choice2) {
        document.querySelector("#mediumArea").classList.add("d-none");
    }
    if (choice3) {
        document.querySelector("#bodyArea").classList.add("d-none");
    }

})

// adds shield choice to localStorage
phase3.addEventListener("click", function (event) {
    var click = event.target.id;

    if (click == "small") {
        weapons.push("Small");
        weaponPhotos.push('sshld');
    }

    else if (click == "medium") {
        weapons.push("Medium");
        weaponPhotos.push('mshld');
    }
    else if (click == "body") {
        weapons.push("Body");
        weaponPhotos.push('bshld');
    }
    //sending choices to localStorage
    localStorage.setItem("weapons", JSON.stringify(weapons));
    localStorage.setItem("photos", JSON.stringify(weaponPhotos));
    window.location.replace("battle.html");

})

document.querySelector("#homeButton").addEventListener("click", function () {
    window.location.replace("index.html");
})
