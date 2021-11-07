function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// находим инпут
const inputEl = document.querySelector("input");
// находим кнопку "создать"
const btnCreateEl = document.querySelector("[data-create]");
// находим кнопку "очистить"
const btnDestroyEl = document.querySelector("[data-destroy]");
// находим div для записи элементов
const boxesEl = document.querySelector("#boxes");

// функция для генерации новых дивов
function createBoxes(newBoxes) {
  // задаем наччальне размеры дивов
  let width = 30;
  let height = 30;
  // генерируем новый див
  for (let i = 1; i < newBoxes + 1; i += 1) {
    // создаем в памяти новый элемент див
    const newDiv = document.createElement("div");
    // присваиваем новому диву класс
    newDiv.classList.add("boxes");
    // увеличиваем размер нового дива
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    width += 10;
    height += 10;
    // добавляем случайный цвет
    newDiv.style.backgroundColor = getRandomHexColor();
    // добавляем новые дивы
    boxesEl.append(newDiv);
  }
}

//функция для добавления новых дивов по клику
btnCreateEl.addEventListener("click", (event) => {
  const numBoxes = Number(inputEl.value);
  createBoxes(numBoxes);
});

//функция очистки всех дивов
function destroyBoxes() {
  boxesEl.innerHTML = "";
}
btnDestroyEl.addEventListener("click", () => {
  destroyBoxes();
});
