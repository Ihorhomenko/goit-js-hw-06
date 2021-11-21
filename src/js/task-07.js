const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

input.addEventListener("input", () => {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
});
