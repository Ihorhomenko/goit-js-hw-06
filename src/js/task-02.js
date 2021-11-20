const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const listIngredientsItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  return listItem;
});

listIngredients.append(...listIngredientsItems);
