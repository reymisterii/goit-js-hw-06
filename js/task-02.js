const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(`#ingredients`);

const newArray = [];

ingredients.forEach((ingredient) => {

const titleEl = document.createElement(`li`);
titleEl.classList.add(`item`);
  titleEl.textContent = ingredient;
  
  newArray.push(titleEl);
  console.log(titleEl);
});
console.log(newArray);

ulEl.append(...newArray);