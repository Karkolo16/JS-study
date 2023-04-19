const jeden = document.querySelector("#jeden");
const dwa = document.querySelector("#dwa");
const trzy = document.querySelector("#trzy");

jeden.addEventListener("click", () => {
  console.log("Klik w jeden");
  jeden.style["background-color"] = "black";
});

dwa.addEventListener("click", () => {
  console.log("Klik w dwa");
  dwa.style["background-color"] = "burlywood";
});

trzy.addEventListener("click", () => {
  console.log("Klik w trzy");
  trzy.style["background-color"] = "red";
});
