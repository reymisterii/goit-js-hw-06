const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(`#ingredients`);

ingredients.forEach((ingredient) => {

const titleEl = document.createElement(`li`);
titleEl.classList.add(`item`);
titleEl.textContent = ingredient;
  ulEl.append(titleEl);
  
  console.log(titleEl);

});

