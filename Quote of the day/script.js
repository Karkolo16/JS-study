"use strict";

let quoteArray = [
  {
    author: "Helen Rowland",
    quote: "You will never win if you never begin.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
  },
  {
    author: "Benjamin Fran klin",
    quote: "An investment in knowledge pays the best interest.",
  },
  {
    author: "Mahatma Ghandi",
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  },
  {
    author: "Les Brown",
    quote: "You are never too old to set another goal or to dream a new dream.",
  },
  {
    author: "Colin Powell",
    quote:
      "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
  },
];

const button = document.getElementById("btn");

function randomSelector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
  let randomNumber = randomSelector(quoteArray.length);

  document.getElementById("quoteOutput").innerHTML =
    '"' + quoteArray[randomNumber].quote + '"';
  document.getElementById("authorOutput").innerHTML =
    "-" + quoteArray[randomNumber].author + "-";
}

button.addEventListener("click", function () {
  generateQuote();
});
