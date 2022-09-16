const inputEl = document.querySelector("#name-input");

const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  userNameEl.textContent = event.currentTarget.value;
}
