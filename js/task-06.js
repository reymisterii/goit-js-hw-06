const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}