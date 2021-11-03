const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const TotalIngredientsListEl = [];

ingredients.forEach((item) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = item;
  TotalIngredientsListEl.push(ingredientsItemEl);
});

ingredientsListEl.append(...TotalIngredientsListEl);
