function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector(`button[data-create]`);
const boxs = document.querySelector("#boxes");
const destroyBtn = document.querySelector(`button[data-destroy]`);

let amounts = 0;
const box = [];

input.addEventListener("input", onNumber);

function onNumber() {
  return (amounts = Number(input.value));
}

createBtn.addEventListener("click", () => onCreate(amounts));

function onCreate(amounts) {
  let size = 30;

  for (let i = 0; i < amounts; i += 1) {
    boxs.insertAdjacentHTML(
      "beforeend",
      `<div class="color" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size += 10;
  }
  boxs.append(...box);
}

destroyBtn.addEventListener("click", onDestroy);

function onDestroy() {
  boxs.innerHTML = "";
}
