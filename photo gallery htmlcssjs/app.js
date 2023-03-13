'use strict'

const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup")

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener('click', () =>{
        console.log(thumbnail)
    })
});

