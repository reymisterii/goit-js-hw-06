const pozitionEl = document.querySelector(`#font-size-control`);
const abracadabra = document.querySelector(`#text`);
console.log(pozitionEl);
console.log(abracadabra);
pozitionEl.addEventListener(`input`, (event) => {
  
   abracadabra.style.fontSize = `${event.currentTarget.value}px`;
});