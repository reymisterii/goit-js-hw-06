const pozitionEl = document.querySelector(`#font-size-control`);
const abracadabra = document.querySelector(`#text`);
 abracadabra.style.fontSize =`${55}px`;;
console.log(pozitionEl);
console.log(abracadabra);
pozitionEl.addEventListener(`input`, (event) => {
   console.log(event.currentTarget.value);
   abracadabra.style.fontSize = `${event.currentTarget.value}px`;
});