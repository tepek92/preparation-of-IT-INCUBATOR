document.querySelector('.inpt').onkeydown = (event) => {
  document.querySelector(`div[data="${event.key}"]`).classList.add('down');
};

document.querySelector('.inpt').onkeyup = (event) => {
  document.querySelector(`div[data="${event.key}"]`).classList.remove('down');
};
