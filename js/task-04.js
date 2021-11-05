const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");
// создаем хранилище актуального значения
let counterValue = 0;

// по клику отнимаем значение от актуального
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

// по клику добавляем значение к актуальному
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
