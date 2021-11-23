const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", onNmaeOutputOverwrite);

function onNmaeOutputOverwrite(event) {
  if( event.currentTarget.value === ""){
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
  
}
