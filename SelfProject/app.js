let button = document.getElementById("change");

button.addEventListener("click", () => {
  document.body.classList.toggle("color");
});

let quotes = [
  {
    author: "aaaaaa",
    quote: "la la lavida loca",
  },
  {
    author: "bbbbbbb",
    quote: "pencil",
  },
  {
    author: "aaaaaa",
    quote: "la la lavida loca",
  },
];

//znajdz przycisk toggle
let btn = document.getElementById("#toggle");

//funkcja losujaca cytaty
function randomSelector(arrayLength) {
  Math.floor(Math.random * arrayLength);
}
