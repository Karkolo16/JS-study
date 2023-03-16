'use strict'

const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup__close");
const popup_img= document.querySelector(".popup__img");
const arrowLeft = document.querySelector(".popup__arrow--left");
const arrowRight = document.querySelector(".popup__arrow--right");

let currentImgIndex;

//stala dla zmiany zdjecia klawiatura
const showNextImg = () =>{ 
    if (currentImgIndex === thumbnails.length - 1 ){
    currentImgIndex = 0;
}
else {
    currentImgIndex ++;
}
popup_img.src = thumbnails[currentImgIndex].src;
};


thumbnails.forEach((thumbnail, index) => {

    thumbnail.addEventListener('click', (e) =>{
        popup.classList.remove("hidden");
        popup_img.src = e.target.src;
        currentImgIndex = index;
    })
});

popup_close.addEventListener('click',  () =>{
    popup.classList.add("hidden");
});

arrowRight.addEventListener('click', showNextImg);

arrowLeft.addEventListener('click', ()=>{
    if (currentImgIndex === 0){
        currentImgIndex = thumbnails.length - 1;
    }
    else {
        currentImgIndex --;
    }
    popup_img.src = thumbnails[currentImgIndex].src;
});

//dodanie funkcji gdzie mogę strzalkami na klwaiaturze zmieniac obrazy

document.addEventListener('keydown', (e) =>{
    if (e.code === "ArrowRight");
});