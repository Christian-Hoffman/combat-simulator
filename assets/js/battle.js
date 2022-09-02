//api for random character generator
var randomPerson = `https://randomuser.me/api/?results=1&inc=name,dob,picture&nat=us`;

var toJSON = function (response) {
    return response.json();
};

// declaration of values
var score = 0;
var originalPHealth = 100;
var originalPMana = 100;
var originalHPot = 2;
var originalMPot = 2;
var originalEHealth = 200;
var originalEMana = 150;
var enemyEl = document.querySelector('#enemy');
//gets random enemy and displays their information on screen
var enemyStats = [200, 150];
localStorage.setItem("enemyStats", JSON.stringify(enemyStats));
var randomEnemy = function () {
    fetch(randomPerson)
        .then(toJSON)
        .then(function (results) {
            var eStats = JSON.parse(localStorage.getItem("enemyStats", eStats));
            var h2El = document.createElement('h2');
            var imgEl = document.createElement('img');
            originalEHealth = 200;
            originalEMana = 150;
            var enemyPhoto = results.results[0].picture.large;
            h2El.textContent = results.results[0].name.first + ' ' + results.results[0].name.last;
            imgEl.alt = 'Enemy Photo';
            imgEl.setAttribute('src', enemyPhoto);
            imgEl.setAttribute('style', 'display: flex; align-self: left');
            imgEl.height = 150;
            imgEl.width = 150;
            enemyEl.appendChild(h2El);
            enemyEl.appendChild(imgEl);
            document.querySelector("#eHealth").textContent = "Health: " + originalEHealth + "/" + originalEHealth
            document.querySelector("#eMana").textContent = "Mana: " + originalEMana + "/" + originalEMana
            localStorage.setItem("enemyName", JSON.stringify(results.results[0].name));

        });
}
randomEnemy();


var deleteEnemy = function () {

    enemyEl.textContent = "";
    score++;
    document.querySelector("#score").textContent = "Score: " + score;
    localStorage.setItem("score", score);
    var reset = true;
    localStorage.setItem("reset", reset);

    pHealth = originalPHealth;
    pMana = originalPMana;
    hPot = originalHPot;
    mPot = originalMPot;
    pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
    pManaId.textContent = "Mana: " + pMana + "/" + originalPMana;
    hPotId.textContent = "Health Potions: " + hPot + "/" + originalHPot;
    mPotId.textContent = "Mana Potions: " + mPot + "/" + originalMPot;

}



//gets random user character and displays their information on screen
fetch(randomPerson)
    .then(toJSON)
    .then(function (results) {
        var enemyEl = document.querySelector('#user');
        var h2El = document.createElement('h2');
        var imgEl = document.createElement('img');
        var userPhoto = results.results[0].picture.large;
        h2El.textContent = results.results[0].name.first + ' ' + results.results[0].name.last;
        imgEl.alt = 'Enemy Photo';
        imgEl.setAttribute('src', userPhoto);
        imgEl.setAttribute('style', 'display: flex; align-self: left');
        imgEl.height = 150;
        imgEl.width = 150;
        enemyEl.appendChild(h2El);
        enemyEl.appendChild(imgEl);
    });

// grabs weapon selections from localStorage
var weapons = JSON.parse(localStorage.getItem("weapons", weapons));

var swordSelection = weapons[0];
var staffSelection = weapons[1];
var shieldSelection = weapons[2];
console.log(swordSelection);
console.log(staffSelection);
console.log(shieldSelection);

document.querySelector('#sword').textContent = swordSelection + ' ' + 'Sword';
document.querySelector('#staff').textContent = staffSelection + ' ' + 'Staff';
document.querySelector('#shield').textContent = shieldSelection + ' ' + 'Shield';

var photos = JSON.parse(localStorage.getItem("photos", photos));

var displaySwordPic = document.querySelector('#swordPic');
var displayStaffPic = document.querySelector('#staffPic');
var displayShieldPic = document.querySelector('#shieldPic');

var swordPhoto = photos[0];
var staffPhoto = photos[1];
var shieldPhoto = photos[2];
console.log(swordPhoto);
console.log(staffPhoto);
console.log(shieldPhoto);

var imgSword = document.createElement('img');
var imgStaff = document.createElement('img');
var imgShield = document.createElement('img');

imgSword.src = './assets/photos/' + swordPhoto + '.png';
imgSword.height = 200;

imgStaff.src = './assets/photos/' + staffPhoto + '.png';
imgStaff.height = 200;

imgShield.src = './assets/photos/' + shieldPhoto + '.png';
imgShield.height = 200;

displaySwordPic.appendChild(imgSword);
displayStaffPic.appendChild(imgStaff);
displayShieldPic.appendChild(imgShield);



localStorage.setItem("shield", undefined);
var actions = document.querySelector("#mid");
var eHealthId = document.querySelector("#eHealth");
var eManaId = document.querySelector("#eMana");
var pHealthId = document.querySelector("#pHealth");
var pManaId = document.querySelector("#pMana");
var hPotId = document.querySelector("#hPot");
var mPotId = document.querySelector("#mPot");
var eHealth = originalEHealth
var eMana = originalEMana;
var pHealth = originalPHealth;
var pMana = originalPMana;
var hPot = originalHPot;
var mPot = originalMPot;
var block;
var reset = false;


var pTurn = function (click) {
    var reset = localStorage.getItem("reset");
    console.log(reset);
    if (reset == "true") {
        eHealth = 200;
        eMana = 150;
        pHealth = originalPHealth;
        pMana = originalPMana;
        hPot = originalHPot;
        mPot = originalMPot;
        pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
        pManaId.textContent = "Mana: " + pMana + "/" + originalPMana;
        hPotId.textContent = "Health Potions: " + hPot + "/" + originalHPot;
        mPotId.textContent = "Mana Potions: " + mPot + "/" + originalMPot;
        localStorage.setItem("reset", false);
    }



    var eName = JSON.parse(localStorage.getItem("enemyName", eName));
    //If user chooses sword button
    if (click == "sword") {
        localStorage.setItem("attacks", true);
        if (weapons[0] == "Bone") {
            eHealth -= 20;
            localStorage.setItem("damage", 20);
            actions.textContent = "You attacked and did 20 Damage!";
            eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
        }

        else if (weapons[0] == "Hero") {
            eHealth -= 35;
            localStorage.setItem("damage", 35)
            localStorage.setItem("damage", 35);
            actions.textContent = "You attcked and did 35 Damage!";
            eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
        }

        else if (weapons[0] == "Demon") {
            if (Math.floor(Math.random() * 20) == 0) {
                eHealth = 0;
                actions.textContent = "You attacked and instantly killed your enemy!"
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
            }
            else {
                eHealth -= 35;
                localStorage.setItem("damage", 35)
                actions.textContent = "You attacked and did 35 damage!";
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
            }
        }
    }
    //if user chooses staff button
    if (click == "staff") {
        if (pMana >= 25) {
            if (weapons[1] == "Nature") {
                eHealth -= 15;
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
                localStorage.setItem("damage", 15);
                if (pHealth < 85) {
                    pHealth += 15;
                    pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
                    actions.textContent = "You did 15 damage and healed 15 health!";
                }
                else {
                    pHealth = 100;
                    actions.textContent = "You did 15 damage and healed to full health!";
                }
            }
            else if (weapons[1] == "Healing") {
                if (pHealth < 70) {
                    pHealth += 30;
                    pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
                    actions.textContent = "You Healed 30 health!";
                }
                else {
                    pHealth = 100;
                    actions.textContent = "You healed to max health!";
                }
            }
            else if (weapons[1] == "Fire") {
                eHealth -= 30;
                localStorage.setItem("damage", 30);
                if (Math.floor(Math.random() * 5) == 0) {
                    eHealth -= 10;
                    actions.textContent = "You did 30 damage and also a extra 10 damage for a total of 40 damage to " + eName.first + "!";
                }
                else {
                    actions.textContent = 'You did 30 damage to ' + eName.first + '!';
                }

                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
            }
            pMana -= 25;
            pManaId.textContent = "Mana: " + pMana + "/" + originalPMana;
        }

        else {
            actions.textContent = "You do not have enough mana to cast a spell!";
        }
    }


    //if user chooses shield button
    if (click == "shield") {
        if (weapons[2] == "Small") {
            localStorage.setItem("s hield", .5);
        }
        else if (weapons[2] == "Medium") {
            localStorage.setItem("shield", .75)
        }
        else if (weapons[2] == "Body") {
            localStorage.setItem("shield", .751);
        }
        actions.textContent = "You put your guard up!";

    }
    if (click == "health") {
        if (hPot > 0) {
            hPot--;
            if (pHealth < 50) {
                pHealth += 50;
                actions.textContent = "You used a health potion and gained 50 health!";
                pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
                hPotId.textContent = "Health Potions: " + hPot + "/" + originalHPot;
            }
            else {
                pHealth = 100;
                actions.textContent = "You used a health potion and healed to max health!";
                pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
                hPotId.textContent = "Health Potions: " + hPot + "/" + originalHPot;
            }
        }
        else {
            actions.textContent = "You dont have anymore health potions!";
        }
    }
    if (click == "mana") {
        if (mPot > 0) {
            mPot--;
            if (pMana < 50) {
                pMana += 50;
                actions.textContent = "You used a mana potion and gained 50 mana!";
                pManaId.textContent = "Mana: " + pMana + "/" + originalPMana;
                mPotId.textContent = "Mana Potions: " + mPot + "/" + originalMPot
            }
            else {
                pMana = 100;
                actions.textContent = "You used a mana potiona and gained max mana!";
                pManaId.textContent = "Mana: " + pMana + "/" + originalPMana;
                mPotId.textContent = "Mana Potions: " + mPot + "/" + originalMPot;
            }
        }
        else {
            actions.textContent = "You dont have anymore mana potions!";
        }
    }
    if (eHealth <= 0) {
        deleteEnemy();
        randomEnemy();
    }
}



var aCounter = 0;
var sCounter = 0;
var hCounter = 0;


// calls for enemys turn
var eTurn = function () {
    var enemyChoice = Math.floor(Math.random() * 3);
    if (enemyChoice == 0) {
        attack();
    }
    else if (enemyChoice == 1) {
        if(eHealth < 190){
        shield();
        }
        else{
            var secondary = Math.floor(Math.random() * 2);
            if(secondary == 0){
                attack();
            }
            else{
                heal();
            }
        }
    }
    else if (enemyChoice == 2) {
        heal();
    }

    if (pHealth <= 0) {
        window.location.replace("end-screen.html")
    }

}


//enemy attack
var attack = function () {
    var eName = JSON.parse(localStorage.getItem("enemyName", eName));
    // check for too many times

    if (aCounter == 3) {
        aCounter = 0;
        var secondary = Math.floor(Math.random() * 2)
        if (secondary == 0) {
            shield();
        }
        else {
            heal();
        }
    }
    else {

        var shielded = localStorage.getItem("shield", shielded);
        if (shielded !== "undefined") {

            if (shielded == .5) {
                pHealth -= 17;
                actions.textContent = eName.first + " attacked but only did 17 damage!";
                pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
            }
            else if (shielded == .75) {
                pHealth -= 9;
                actions.textContent = eName.first + " attacked but only did 9 damage!";
                pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
            }
            else if (shielded == .751) {
                pHealth -= 9;
                eHealth -= 9;
                actions.textContent = eName.first + " attacked but only did 9 damage! You also reflected 9 damage!"
                pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
            }
            localStorage.setItem("shield", "undefined");
        }
        else {
            pHealth -= 35;
            actions.textContent = eName.first + " attacked and did 35 damage to you!";
            pHealthId.textContent = "Health " + pHealth + "/" + originalPHealth;
        }
        aCounter++;
    }
    localStorage.setItem("attacks", false);

}

//enemy shield
var shield = function () {
    var correct = localStorage.getItem("attacks");
    var eName = JSON.parse(localStorage.getItem("enemyName", eName));
    if (sCounter == 3) {
        sCounter = 0;
        var secondary = Math.floor(Math.random * 2);
        if (secondary = 0) {
            attack();
        }
        else {
            heal();
        }
    }
    else {
        if (correct) {
            window.alert("Hello World")
            var attack = JSON.parse(localStorage.getItem("damage", attack)) / 2;
            eHealth += attack;
            actions.textContent = "But, " + eName.first + " blocked your attack and you did half damage!";
            eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
        }
        else{
            actions.textContent = eName.first + " blocked nothing!";
        }

    }
    localStorage.setItem("attacks", false);
    localStorage.setItem("shield", "undefined");

}
//enemy heal
var heal = function () {
    var eName = JSON.parse(localStorage.getItem("enemyName", eName));
    if (hCounter == 3) {
        hCounter = 0;
        var secondary = Math.floor(Math.random() * 2);
        if (secondary == 0) {
            attack();
        }
        else {
            shield();
        }
    }
    else {
        if (eMana < 30) {
            actions.textContent = eName.first + " has no mana left, " + eName.first + " cannot heal!";
        }
        else {
            if (eHealth < 165) {
                eHealth += 35;
                eMana -= 30;
                actions.textContent = eName.first + " has healed 35 health!"
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
                eManaId.textContent = "Mana: " + eMana + "/" + originalEMana;

            }
            else {
                eHealth = 200;
                eMana -= 30;
                actions.textContent = eName.first + " has healed to max health!";
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
                eManaId.textContent = "Mana: " + eMana + "/" + originalEMana;
            }
        }
    }
    localStorage.setItem("shield", "undefined");
    localStorage.setItem("attacks", false);
}





document.querySelector("#container").addEventListener("click", function (event) {
    var click = event.target.id;
    pTurn(click);
    if (eHealth > 0) {
        setTimeout(eTurn, 1000);
    }

})


document.querySelector("#endButton").addEventListener("click", function () {
    window.location.replace("end-screen.html");
})