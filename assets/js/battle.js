//api for random character generator
var randomPerson = `https://randomuser.me/api/?results=1&inc=name,dob,picture`;

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