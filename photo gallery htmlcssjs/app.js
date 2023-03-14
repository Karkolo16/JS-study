'use strict'

const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup__close");

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener('click', () =>{
        popup.classList.remove("hidden")
    })
});

popup_close.addEventListener('click',  () =>{
    popup.classList.add("hidden");
})