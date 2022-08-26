let out = document.querySelector(".arr");

// for (let i = 5; i <= 9; i += 2) {
//   for (let j = 0; j < i; j++) {
//     out.innerHTML += "*";
//   }
//   out.innerHTML += "<br>";
// }

// let str = '';
// for (let i = 5; i <= 9; i += 2) {
//   for (let j = 0; j < 9; j++) {
//     if (j >= (9 - i) / 2 && j < 9 - ((9 - i) / 2)) {
//       str += "*";
//     } else {
//       str += "&nbsp;&nbsp;";
//     }
//   }
//   str += "<br>";
// }
// out.innerHTML = str;

let str = '';
let k = 2;
let n = 3;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 6; j++) {
    if (j < k || j > n) {
      str += "&nbsp;&nbsp;";
      // str += "- ";
    } else {
      str += "* ";
    }
  }
  if (i < 2) {
    k--;
    n++;
  } else {
    k++;
    n--;
  }
  str += "<br>";
}
out.innerHTML = str;

