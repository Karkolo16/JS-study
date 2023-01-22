'use strict'

let password = "Bez pracy nie ma kolaczy";

function write_password (){
    document.getElementById("board").innerHTML = password;
}

window.onload = write_password; 
