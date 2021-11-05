const textInputEl = document.querySelector("input#validation-input");
const textRequiredLength = Number(textInputEl.dataset.length);

textInputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === textRequiredLength) {
    textInputEl.classList.add("valid");
    textInputEl.classList.remove("invalid");
  } else {
    textInputEl.classList.add("invalid");
    textInputEl.classList.remove("valid");
  }
});

// event.currentTarget - свойство "currentTarget" на объекте события ссылвется на тот элемент, которые прослушивает это событие (в данном примере на "textInputEl")
