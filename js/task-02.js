const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach((ingredient) => {

const titleEl = document.createElement(`li`);
titleEl.classList.add(`item`);
titleEl.textContent = ingredient;
const ulEl = document.querySelector(`#ingredients`);
  ulEl.append(titleEl);
  console.log(titleEl);
});

