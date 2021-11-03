const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const TotalingredientsListEl = [];

ingredients.forEach((item) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = item;
  TotalingredientsListEl.push(ingredientsItemEl);
});

ingredientsListEl.append(...TotalingredientsListEl);
