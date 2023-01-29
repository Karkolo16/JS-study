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

let letters = new Array (35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

//write letters in alphabet

function start(){

    let inside_div ="";

    for (let i=0; i<= 34; i++){
        let element = "lett" + i;
        inside_div = inside_div + '<div class="letter" onclick ="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
        if( (i+1)% 7 == 0) inside_div = inside_div + '<div style="clear:both"</div>'
    }

    document.getElementById("alphabet").innerHTML = inside_div;

    write_password();

}

// function changing "_" to letter

String.prototype.changeSign = function(place, sign){
    if(place > this.length - 1)return this.toString();
    else return this.substring(0, place) + sign + this.substring(place+1); //substr - can change one letter 
}


function check(no){

    let correct = false

    for (let i=0; i<sizePassword; i++){
        if (password.charAt(i) == letters [no]){
            password1 = password1.changeSign(i, letters[no]);
            correct = true
        }
    }
    if(correct ==true){

    write_password()

    } else {

    }

}