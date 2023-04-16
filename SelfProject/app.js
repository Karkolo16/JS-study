let button = document.getElementById("change");

button.addEventListener("click", () => {
  document.body.classList.toggle("color");
});

let quotes = [
  {
    "author": "aaaaaa",
    "quote": "la la lavida loca",
  },
  {
    "author": "bbbbbbb",
    "quote": "pencil",
  },
  {
    "author": "aaaaaa",
    "quote": "la la lavida loca",
  },
];

//znajdz przycisk toggle
let btn = document.getElementById("toggle");

//funkcja losujaca cytaty
function randomSelector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
//funkcja generujaca widoczne cytatyi ich autorow
function quoteGenerator() {
  let randomNumber = randomSelector (quotes.length);

   document.getElementById("quoteOutput").innerHTML =
    '"' + quotes[randomNumber].quote + '"';
  document.getElementById("authorOutput").innerHTML =
    "-" + quotes[randomNumber].author + "-";
}

btn.addEventListener('click', function () {
  quoteGenerator();
});
