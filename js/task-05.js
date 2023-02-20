const inputEl = document.querySelector(`#name-input`);
const outputMassegEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, (event) => {
   outputMassegEl.textContent = event.currentTarget.value;
});