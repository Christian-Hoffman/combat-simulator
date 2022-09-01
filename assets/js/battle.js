//api for random character generator
var randomPerson = `https://randomuser.me/api/?results=1&inc=name,dob,picture&nat=us`;

var toJSON = function (response) {
    return response.json();
};

// declaration of values
var originalEHealth = 100;
var originalEMana = 100;
var originalPHealth = 100;
var originalPMana = 100;


//gets random enemy and displays their information on screen
fetch(randomPerson)
    .then(toJSON)
    .then(function (results) {
        var enemyEl = document.querySelector('#enemy');
        var h2El = document.createElement('h2');
        var pEl = document.createElement('p');
        var imgEl = document.createElement('img');
        var enemyPhoto = results.results[0].picture.large;
        h2El.textContent = results.results[0].name.first + ' ' + results.results[0].name.last;
        pEl.textContent = results.results[0].dob.age;
        imgEl.alt = 'Enemy Photo';
        imgEl.setAttribute('src', enemyPhoto);
        imgEl.setAttribute('style', 'display: flex; align-self: left');
        imgEl.height = 150;
        imgEl.width = 150;
        enemyEl.appendChild(h2El);
        enemyEl.appendChild(pEl);
        enemyEl.appendChild(imgEl);
        console.log(results);
        console.log('Name: ', results.results[0].name.first + ' ' + results.results[0].name.last);
        console.log('Age: ', results.results[0].dob.age);
        console.log('Pic: ', results.results[0].picture.large);
    });

//gets random user character and displays their information on screen
fetch(randomPerson)
    .then(toJSON)
    .then(function (results) {
        var enemyEl = document.querySelector('#user');
        var h2El = document.createElement('h2');
        var pEl = document.createElement('p');
        var imgEl = document.createElement('img');
        var userPhoto = results.results[0].picture.large;
        h2El.textContent = results.results[0].name.first + ' ' + results.results[0].name.last;
        pEl.textContent = results.results[0].dob.age;
        imgEl.alt = 'Enemy Photo';
        imgEl.setAttribute('src', userPhoto);
        imgEl.setAttribute('style', 'display: flex; align-self: left');
        imgEl.height = 150;
        imgEl.width = 150;
        enemyEl.appendChild(h2El);
        enemyEl.appendChild(pEl);
        enemyEl.appendChild(imgEl);
        console.log(results);
        console.log('Name: ', results.results[0].name.first + ' ' + results.results[0].name.last);
        console.log('Age: ', results.results[0].dob.age);
        console.log('Pic: ', results.results[0].picture.large);
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





var eHealthId = document.querySelector("#eHealth");
var eManaId = document.querySelector("#eMana");
var pHealthId = document.querySelector("#pHealth");
var pManaId = document.querySelector("#pMana");
var eHealth = originalEHealth
var eMana = originalEMana;
var pHealth = originalPHealth;
var pMana = originalPMana;
var block;



var pTurn = function (click) {
    if (click == "sword") {
        if (weapons[0] == "Bone") {
            eHealth -= 20;
            eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
        }

        else if (weapons[0] == "Hero") {
            eHealth -= 35;
            eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
        }

        else if (weapons[0] == "Demon") {
            if (Math.floor(Math.random() * 20) == 0) {
                eHealth = 0;
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
            }

            eHealth -= 35;
            eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;

        }
    }
    if (click == "staff") {
        if (pMana >= 25) {
            if (weapons[1] == "Nature") {
                eHealth -= 15;
                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
                if (pHealth < 85) {
                    p += 15;
                    pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
                }
                else {
                    pHealth = 100;
                }
            }
            else if (weapons[1] == "Healing") {
                if (pHealth < 70) {
                    p += 30;
                    pHealthId.textContent = "Health: " + pHealth + "/" + originalPHealth;
                }
                else {
                    pHealth = 100;
                }
            }
            else if (weapons[1] == "Fire") {
                eHealth -= 30;
                if (Math.floor(Math.random() * 5) == 0) {
                    eHealth -= 10;
                }

                eHealthId.textContent = "Health: " + eHealth + "/" + originalEHealth;
            }
            pMana -= 25;
            pManaId.textContent = "Mana: " + pMana + "/" + originalPMana;
        }

        else {
            document.querySelector("#mid").textContent = "You do not have enough mana to cast a spell!";
        }
    }
    if (click == "shield"){
        if(weapons[2] == "Small"){
           localStorage.setItem("shield", .5);
        }
        else if(weapons[2] == "Medium"){
            localStorage.setItem("shield")
        }
    }

}




document.querySelector("#container").addEventListener("click", function (event) {
    var click = event.target.id;
    pTurn(click);
})


document.querySelector("#endButton").addEventListener("click", function () {
    window.location.replace("end-screen.html");
})