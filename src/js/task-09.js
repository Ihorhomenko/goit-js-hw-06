function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
btnChangeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}
