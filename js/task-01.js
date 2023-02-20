// Categories
const liItemsEl = document.querySelectorAll(`.item`);
const titleItemsEl = document.querySelectorAll(`h2`);
// console.log(liItemsEl);
console.log(`Number of categories: ${liItemsEl.length}`);

// Animals
const animaleItemsEl = liItemsEl[0].lastElementChild;
console.log(`Category: ${titleItemsEl[0].textContent}`);
console.log(`Elements: ${animaleItemsEl.children.length}`);

// Products
const productsItemsEl = liItemsEl[1].lastElementChild;
console.log(`Category: ${titleItemsEl[0].textContent}`);
console.log(`Elements: ${productsItemsEl.children.length}`);

// Technologies
const technologies = liItemsEl[2].lastElementChild;
console.log(`Category: ${titleItemsEl[0].textContent}`);
console.log(`Elements: ${technologies.children.length}`);
