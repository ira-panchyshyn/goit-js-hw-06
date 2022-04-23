const outputElement = document.querySelector("#name-output");
const inputElement = document.querySelector("#name-input");
inputElement.addEventListener("input", (event) => {
  outputElement.textContent = event.target.value
    ? event.target.value.trim()
    : "Anonymous";
});
