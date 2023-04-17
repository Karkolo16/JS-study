"use strict";

function writeNumbers() {
  let number1 = document.getElementById("field1").value;
  let number2 = document.getElementById("field2").value;
  let text = "";

  for (let i = number1; i <= number2; i++) {
    text = text + i + " ";
  }

  for (let i = number1; i >= number2; i--) {
    text = text + i + " ";
  }

  document.getElementById("results").innerHTML = text;
}

const button = document.getElementById("button");
button.addEventListener("click", writeNumbers);
