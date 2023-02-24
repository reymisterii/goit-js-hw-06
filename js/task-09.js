const btnEl = document.querySelector(`.change-color`);
const colorEl = document.querySelector(`color`);
const bodyEl = document.querySelector(`body`);



btnEl.addEventListener(`click`, onBtnColorChange);

function onBtnColorChange() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorElem.textContent = `${color}`;
 
};
colorEl.prepend(colorElem);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};