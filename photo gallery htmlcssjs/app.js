'use strict'

const thumbnails = document.querySelectorAll(".thumbnail img");

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener('click', () =>{
        console.log(thumbnail)
    })
});
