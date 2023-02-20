const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');


let numberCounter = 0;

const incrementCounter = () => {
   numberCounter ++;
   counter.textContent = numberCounter;
};

const decrementCounter = () => {
   numberCounter --;
   counter.textContent = numberCounter;
};

buttonPlus.addEventListener(`click`, incrementCounter);
buttonMinus.addEventListener(`click`, decrementCounter);
