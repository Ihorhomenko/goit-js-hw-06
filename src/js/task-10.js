function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const clearBTN = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

clearBTN.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1) {
    const div = `<div style="width:${width}px; height:${height}px; background-color:${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", div);
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  input.value = "";
  boxes.innerHTML = "";
}
