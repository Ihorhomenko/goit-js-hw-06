const dataInput = document.querySelector("#validation-input");
const dataInputLength = Number(dataInput.getAttribute("data-length"));

dataInput.addEventListener("blur", checkNumberContentUInput);

function checkNumberContentUInput(event) {
  console.log(event.currentTarget.value.length);
  if (dataInputLength !== event.currentTarget.value.length) {
    if(dataInput.classList.contains("valid")) {
      dataInput.classList.remove("valid");
    }
    dataInput.classList.add("invalid");
  } else {
    if (dataInput.classList.contains("invalid")) {
      dataInput.classList.remove("invalid");
    }
    dataInput.classList.add("valid");
  }
}
