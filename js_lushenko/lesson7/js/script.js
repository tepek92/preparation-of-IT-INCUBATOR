let arr = [1, 0, 0, 0, 0];
document.querySelector(".arr").textContent = `[${arr}]`;

// document.querySelector(".shift").onclick = () => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       arr[i] = 0;
//       if (i < arr.length - 1) {
//         arr[i + 1] = 1;
//       } else {
//         arr[0] = 1;
//       }
//       break;
//     }
//   }
//   document.querySelector(".arr").textContent = `[${arr}]`;
// };

document.querySelector(".shift").onclick = () => {
  let index = arr.indexOf(1);
  arr[index] = 0;
  if (index < arr.length - 1) {
    arr[index + 1] = 1;
  } else {
    arr[0] = 1;
  }
  document.querySelector(".arr").textContent = `[${arr}]`;
};

// let k = 0;
// document.querySelector(".shift").onclick = () => {
//   arr[k] = 0;
//   if (k < arr.length - 1) {
//     arr[k + 1] = 1;
//   } else {
//     arr[0] = 1;
//     k = -1;
//   }
//   k++;
//   document.querySelector(".arr").textContent = `[${arr}]`;
// };