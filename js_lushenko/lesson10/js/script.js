let p = document.querySelector('progress');

document.querySelector('.btn').onclick = () => {
  let set = 0;
  let progress = setInterval(() => {
  p.setAttribute("value", set);
  document.querySelector(".status").textContent = set*2 + '%';
  set++;}, 200);
  setTimeout(() => {
    clearInterval(progress)
    box1.style.backgroundColor = "";
    box2.style.backgroundColor = "";
    box3.style.backgroundColor = "";

  }, 10200);
 }

let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');

box1.oncontextmenu = () => {
  if (box1.style.backgroundColor === "white") {
    box1.style.backgroundColor = 'red';
  } else {
    box1.style.backgroundColor = 'white';
  }
}

box2.onmouseover = () => {
  box2.style.backgroundColor = 'green';
}
box2.onmouseout = () => {
  box2.style.backgroundColor = 'yellow';
}

box3.onmousedown = () => {
  box3.style.backgroundColor = 'pink';
}
box3.onmouseup = () => {
  box3.style.backgroundColor = 'white';
}

// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.