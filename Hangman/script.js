'use strict'

let password = "Bez pracy nie ma kolaczy";
password = password.toUpperCase();

let sizePassword = password.length;

let password1 = "";
// loop that hide password for us
for(let i=0; i<sizePassword;i++){
    if (password.charAt(i)==" ") password1 = password1 + " ";
    else password1 = password1 + "-";
}
//function that writes password on the top 
function write_password (){
    document.getElementById("board").innerHTML = password1;
}

window.onload = start; 

//write letters in alphabet

function start(){

    let inside_div ="";

    for (let i=0; i<= 34; i++){
        inside_div = inside_div + '<div class="letter">A</div>';
    }

    document.getElementById("alphabet").innerHTML = inside_div;

    write_password();

}