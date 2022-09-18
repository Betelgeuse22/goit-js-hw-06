const inputEl = document.querySelector("#name-input");

const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange() {
  const newString = inputEl.value.trim();

  if (newString.length >= 1) {
    userNameEl.textContent = newString;
  } else if (newString.length === 0) {
    userNameEl.textContent = "Anonymous";
  }
}
