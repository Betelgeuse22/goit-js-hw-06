const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (
    event.currentTarget.elements.email.value.length === 0 ||
    event.currentTarget.elements.password.value.length === 0
  ) {
    alert("Please fill in all fields of the form!");
  } else {
    console.log(data);
    event.currentTarget.reset();
  }
}
