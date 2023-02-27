const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(`#ingredients`);

// ingredients.forEach((ingredient) => {

// const titleEl = document.createElement(`li`);
// titleEl.classList.add(`item`);
// titleEl.textContent = ingredient;
  
// ulEl.append(titleEl);
//   console.log(titleEl);

// });

const firstTitleEl = document.createElement(`li`);
firstTitleEl.classList.add(`item`);
firstTitleEl.textContent = ingredients[0];
 const secondTitleEl = document.createElement(`li`);
 secondTitleEl.classList.add(`item`);
 secondTitleEl.textContent = ingredients[1];
const thirdTitleEl = document.createElement(`li`);
thirdTitleEl.classList.add(`item`);
thirdTitleEl.textContent = ingredients[2];
const fourthTitleEl = document.createElement(`li`);
fourthTitleEl.classList.add(`item`);
fourthTitleEl.textContent = ingredients[3];
const fifthTitleEl = document.createElement(`li`);
fifthTitleEl.classList.add(`item`);
fifthTitleEl.textContent = ingredients[4];
const sixtTitleEl = document.createElement(`li`);
sixtTitleEl.classList.add(`item`);
sixtTitleEl.textContent = ingredients[5];

 
 ulEl.append(firstTitleEl, secondTitleEl, thirdTitleEl, fourthTitleEl, fifthTitleEl, sixtTitleEl);