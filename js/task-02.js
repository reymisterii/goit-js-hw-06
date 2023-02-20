const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const titleEl = document.createElement(`li`);
titleEl.classList.add(`item`);
titleEl.textContent = ingredients;
console.log(titleEl);

const ulEl = document.querySelector(`#ingredients`);
// console.log(ulEl);
ulEl.append(titleEl);