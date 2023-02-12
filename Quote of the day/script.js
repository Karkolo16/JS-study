'use strict'

let quoteArray = [

    {
        "author":"Karolina",
        "quote":"abcde fgh abecadlo."

    },
    {
        "author":"Karolina Koala",
        "quote":"alfabet."

    },
    {
        "author":"Karolina Strus",
        "quote":"YOLO"

    }

]


const button = document.getElementById('btn');

function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote(){
    let randomNumber = randomSelector(quoteArray.length);

    document.getElementById("quoteOutput").innerHTML = '"' + quoteArray[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '-' + quoteArray[randomNumber].author + '-';
}

button.addEventListener('click',function(){

    generateQuote();

});
