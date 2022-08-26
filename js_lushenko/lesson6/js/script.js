let yellow = document.querySelector(".btnYellow");
let green = document.querySelector(".btnGreen");
let border = document.querySelector(".btnBorder");
let box = document.querySelector(".box");
let clean = document.querySelector(".btnClean");
let abc = document.querySelector(".abc");

yellow.onclick = () => {
  box.classList.remove("boxGreen");
  box.classList.toggle("boxYellow");
};
green.onclick = () => {
  box.classList.remove("boxYellow");
  box.classList.toggle("boxGreen");
};
border.onclick = () => {
  box.classList.toggle("boxBorder");
};
clean.onclick = () => {
  box.classList.remove("boxGreen", "boxYellow", "boxBorder");
};

abc.onclick = () => {
  abc.classList.toggle("boxBorder");
};

let petrol = document.querySelectorAll(".petrol");
let price = document.querySelector(".price");
let liter = document.querySelector(".liter");
petrol.forEach(
  (pet) =>
    (pet.onclick = () => {
      price.textContent = "Сумма: " + liter.value * pet.getAttribute("data");
    })
);

// petrol.onclick = () => {
//   let liter = document.querySelector(".liter").value;
//   let price = petrol.getAttribute("data");
//   let result =  liter * price;
//   document.querySelector(".price").textContent += result;
// }

// for (let i = 0; i <= petrol.length; i++) {
//   petrol[i].onclick = () => {
//     let liter = document.querySelector(".liter").value;
//     let price = petrol[i].getAttribute("data");
//     let result =  liter * price;
//     document.querySelector(".price").textContent = "Сумма: " + result;
//   }
// }

// .petrol
// .btn92
// .btn95
// .btn98
// .price
