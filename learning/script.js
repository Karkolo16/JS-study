'use strict'

const quotes = [
        { 
        "author": "Koło",
        "quote": "asfjskfdjasldasklda"
       },

       { 
        "author": "Koło2",
        "quote": "asfjskfdjasldasklda"
       },

   { 
    "author": "Koło3",
    "quote": "asfjskfdjasldasklda"
   }
]



const button = document.getElementById("btn");

function randomSelector(arrayLength) {
return Math.floor(Math.random () * arrayLength);
}

function quoteGenerator (){

    let randomNumber = randomSelector(quotes.length);

    document.getElementById("authorOutput").innerHTML = '"' + quotes[randomNumber].quote + '"';
    document.getElementById("quoteOutput").innerHTML = '-' + quotes[randomNumber].author + '-'

}



   button.addEventListener('click',function(){

    quoteGenerator();

   });

