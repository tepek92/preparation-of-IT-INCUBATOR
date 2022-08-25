let myForm = document.querySelector("#f-1");
let test = myForm.elements.in1;
let btn = myForm.elements.btn1;

const proverka = (str) =>
  str[0] === ")"
    ? -1
    : str.split("").reduce((sum, c) => (sum += (c == "(" ? 1 : -1)), 0);

btn.onclick = () => {
  event.preventDefault();
  let result = document.querySelector("#spn1");
  if (proverka(test.value) === 0) {
    result.innerHTML = "GOOD";
    result.style.backgroundColor = "green";
  } else {
    result.innerHTML = "ERROR";
    result.style.backgroundColor = "red";
  }
};
