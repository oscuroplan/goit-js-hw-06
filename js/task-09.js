function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// находим кнопку, спан и body
const btnChangeColorEl = document.querySelector("button.change-color");
console.log(btnChangeColorEl);
const spanColorEl = document.querySelector("span.color");
console.log(spanColorEl);
const bodyEl = document.querySelector("body");
console.log(bodyEl);

// отслеживаем событие и по клику вызываем функцию switchColor
btnChangeColorEl.addEventListener("click", switchColor);

function switchColor() {
  //вызываем функцию getRandomHexColor() и записываем значение в randomColor
  const randomColor = getRandomHexColor();
  // присваиваем значение цвета body
  bodyEl.style.backgroundColor = randomColor;
  // записываем значение цвета в span
  spanColorEl.textContent = randomColor;
}
