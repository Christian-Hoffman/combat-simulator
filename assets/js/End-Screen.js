document.querySelector("#homeButton").addEventListener("click", function () {
    window.location.replace("index.html");
})


var randomQuote = "https://api.quotable.io/random"
var toJSON = function(response) {
    return response.json();
};
 
fetch(randomQuote)
    .then(toJSON)
    .then(function(results) {
        var quoteEl = document.querySelector('.quote')
        var nameE1 = document.querySelector('.name')
        quoteEl.textContent = '"' + results.content + '"';
        nameE1.textContent = '- ' + results.author;
    }
    );
 

