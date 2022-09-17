function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");

const bodyEl = document.querySelector("body");

const colorValue = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyEl.style.backgroundColor;
}
