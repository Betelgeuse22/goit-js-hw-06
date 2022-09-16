const buttonIncrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonDecrement = document.querySelector(
  'button[data-action="increment"]'
);

const valueEl = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  valueEl.textContent = counterValue;
  counterValue += 1;
};

const increment = () => {
  valueEl.textContent = counterValue;
  counterValue -= 1;
};

buttonDecrement.addEventListener("click", decrement);

buttonIncrement.addEventListener("click", increment);
