const dataInput = document.querySelector("#validation-input");
const dataInputLength = Number(dataInput.getAttribute("data-length"));

dataInput.addEventListener("blur", checkNumberContentUInput);

function checkNumberContentUInput(event) {
  console.log(event.currentTarget.value.length);
  if (dataInputLength === event.currentTarget.value.length) {
    dataInput.classList.add("valid");
  } else {
    dataInput.classList.add("invalid");
  }
}
