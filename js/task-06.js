const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("change", onInputLength);

function onInputLength(event) {
  if (event.currentTarget.value.length == validationInputEl.dataset.length) {
    validationInputEl.classList.remove("invalid");
    return validationInputEl.classList.add("valid");
  }
  validationInputEl.classList.remove("valid");
  return validationInputEl.classList.add("invalid");
}
