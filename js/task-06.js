const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", (event) => {
  if (
    event.target.value.trim().length === Number(event.target.dataset.length)
  ) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
});
