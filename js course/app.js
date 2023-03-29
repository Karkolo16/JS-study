let arrowLeft = document.querySelector(".arrow-left");

let arrowRight = document.querySelector(".arrow-right");

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");

let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");

let hideActiveSlide = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
};

let showSlide2 = () => {
  hideActiveSlide();
  slide2.classList.add("active");
};

let showSlide1 = () => {
  hideActiveSlide();
  slide1.classList.add("active");
};

let showSlide3 = () => {
  hideActiveSlide();
  slide3.classList.add("active");
};

dot2.addEventListener("click", showSlide2);
dot1.addEventListener("click", showSlide1);
dot3.addEventListener("click", showSlide3);
