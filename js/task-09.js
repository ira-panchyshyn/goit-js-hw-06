function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector("body");
const spanElement = document.querySelector("span.color");
const buttonElement = document.querySelector("button.change-color");

buttonElement.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  spanElement.textContent = color;
});
