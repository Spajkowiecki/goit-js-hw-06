const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const tablica = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.textContent = ingredients[i];
  li.setAttribute("class", "item");
  tablica.appendChild(li);
}
