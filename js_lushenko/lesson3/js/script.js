
let inputIN = document.querySelector(".input");
let buttonPrint = document.querySelector(".button");
let output =  document.querySelector('.out');
let checkMy =  document.querySelector('.memory');


// buttonPrint.onclick = () => output.innerHTML = "Output: " + inputIN.value;
buttonPrint.onclick = () => {
    // console.log(checkMy.checked)
    if (checkMy.checked) {
        output.innerHTML = "Output: " + inputIN.value + "<br> Im remembered you number";
    } else {
        output.innerHTML = "Output: " + inputIN.value;
    }
};

let myForm = document.querySelector('#f-1');
let btn = myForm.elements.btn1;
btn.onclick = () => {
    event.preventDefault();
    console.log(myForm.elements.in1.value);
    console.log(myForm.elements.dat1.value);

}


// buttonPrint.onclick = () => buttonPrint.style.backgroundColor = inputIN.value;


// console.log(a);
