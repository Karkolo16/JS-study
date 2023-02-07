'use strict'

const toggler = document.getElementsByClassName('toggler')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggler.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})
