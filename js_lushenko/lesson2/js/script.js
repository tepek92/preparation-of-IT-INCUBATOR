
let inputIN = document.querySelector(".input");
let buttonPrint = document.querySelector(".button");
let output =  document.querySelector('.out');

buttonPrint.onclick = () => output.innerHTML = "Output: " + inputIN.value;

// console.log(a);
