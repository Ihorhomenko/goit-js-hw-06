const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", onNmaeOutputOverwrite);

function onNmaeOutputOverwrite() {
  nameOutput.textContent = event.currentTarget.value;
}
