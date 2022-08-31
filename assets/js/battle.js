//api for random character generator
var randomPerson = `https://randomuser.me/api/?results=1&inc=name,dob,picture&nat=us`;

var toJSON = function(response) {
    return response.json();
};

//gets random enemy and displays their information on screen
fetch(randomPerson)
.then(toJSON)
.then(function(results) {
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
.then(function(results) {
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

imgSword.src = './assets/photos/' + swordPhoto +'.png';
imgSword.height = 200;

imgStaff.src = './assets/photos/' + staffPhoto +'.png';
imgStaff.height = 200;

imgShield.src = './assets/photos/' + shieldPhoto +'.png';
imgShield.height = 200;

displaySwordPic.appendChild(imgSword);
displayStaffPic.appendChild(imgStaff);
displayShieldPic.appendChild(imgShield);
