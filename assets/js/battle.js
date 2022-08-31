var randomEnemy = `https://randomuser.me/api/?results=1&inc=name,dob,picture`;

var toJSON = function(response) {
    return response.json();
};

fetch(randomEnemy)
.then(toJSON)
.then(function(results) {
    var gameEl = document.querySelector('#game');
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
    gameEl.appendChild(h2El);
    gameEl.appendChild(pEl);
    gameEl.appendChild(imgEl);
    console.log(results);
    console.log('Name: ', results.results[0].name.first + ' ' + results.results[0].name.last);
    console.log('Age: ', results.results[0].dob.age);
    console.log('Pic: ', results.results[0].picture.large);
});
