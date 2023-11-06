const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "записать блок про массивы",
    completed: false,
  },
  {
    title: "рассказать теорию объектов",
    completed: false,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p>Нет элементов</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
};

function getNoteTemplate(note, index) {
  return `
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
      <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success"
        }" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
      </span>
    </li>
  `;
}

/*
array

const names = ["vladimir","valera","natalia"];

names.split(""); делит строку на масив по симвалам 

names.join(""); соединяет масив строку
  
names.unshift("alena"); + в начало

names.shift();  вырезать с начала масива

names.pop(); вырезать с конца масива

names.reverse(); перевернуть масив минимально юзать

names.toReverse(); переварачивает нормально масив

names.sort(); сортирует масив принимает функцию сортировки 

names.splice(index,a);  принимает что вырезать с масива с какого елемента а- количиство елемнтов

names.indexOf(); ищет елемент по назанию при не находе -1

names.with(index,a);  меняет значение в псевдомасиве на нужное по индексу

names.map(func(name)); создает псевдомасив принимает функцию позволяет изменять елементы масива func должно содержать return

names.includes(); если ли елемент в масиве

names.forEach(); итерация по масиву


console.log(names);

object

const people = [
  {
  name: macksim
  cash: 4555
  }

   {
  name: elena
  cash: 48966
  }

   {
  name: ivan
  cash: 3000
  }
]

people.find(func(person)); работает с псевдоелементами через функцию можно найти елемент возвращает буль

people.filter(func(person)); фильтрует по значению


console.log(people);


*/
