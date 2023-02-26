// Categories
const liItemsEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${liItemsEl.length}`);
liItemsEl.forEach((element, i, array) => {
   console.log(element.firstElementChild.textContent);
   console.log(element.lastElementChild.children.length);
});









// for (let i = 0; i < liItemsEl.length; i++) {
//    const element = liItemsEl[i];
//    console.log(element.querySelectorAll(`h2`)[0].textContent);
//    console.log(element.querySelectorAll(`li`).length);
// };