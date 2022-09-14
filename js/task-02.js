const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientLiEl = document.querySelector("#ingredients");

const ingredientItem = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.textContent = ingredient;

  return liItem;
});

ingredientLiEl.append(...ingredientItem);
