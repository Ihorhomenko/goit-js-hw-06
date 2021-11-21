const value = document.querySelector("#value");

let counterValue = 0;

const addValue = document.querySelector('button[data-action="increment"]');
const removeValue = document.querySelector('button[data-action="decrement"]');

addValue.addEventListener("click", onAddValueBtnClick);
removeValue.addEventListener("click", onRemoveValueBtnClick);

function onAddValueBtnClick() {
  counterValue += 1;
  value.textContent = counterValue;
}

function onRemoveValueBtnClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
