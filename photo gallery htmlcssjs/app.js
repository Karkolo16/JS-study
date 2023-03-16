'use strict'

const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup__close");
const popup_img= document.querySelector(".popup__img");
const arrowLeft = document.querySelector(".popup__arrow--left");
const arrowRight = document.querySelector(".popup__arrow--right");

let currentImgIndex;

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener('click', (e) =>{
        popup.classList.remove("hidden");
        popup_img.src = e.target.src;
    })
});

popup_close.addEventListener('click',  () =>{
    popup.classList.add("hidden");
});

arrowRight.addEventListener('click', ()=>{

});
