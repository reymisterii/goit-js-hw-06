const inputEl = document.querySelector(`#name-input`);
const outputMassegEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, (event) => {
   if (event.currentTarget.value.length === 0) {
     return outputMassegEl.textContent = `Anonymous`;
   }
   return outputMassegEl.textContent = event.currentTarget.value;
});
