const textElement = document.querySelector("#text");
const inputElement = document.querySelector("#font-size-control");
inputElement.addEventListener("input", (event) => {
  console.log(event.target.value);
  textElement.style.fontSize = `${event.target.value}px`;
});
