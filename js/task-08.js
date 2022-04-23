const formElement = document.querySelector("form.login-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Fields should not be empty");
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  event.currentTarget.reset();
});
