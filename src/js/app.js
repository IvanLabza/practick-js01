const createEl = document.getElementById("create");

const listEl = document.getElementById("list");

const inputEl = document.getElementById("title");

const successBtn = document.getElementById("success");

const noSuccessBtn = document.getElementById("no-success");



listEl.onclick =function (event){
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;


    if (type === "toggle") {

      notes[index].completed = !notes[index].completed;
      console.log(!notes[index].completed);

    } else if (type === "remove") {
      notes.splice(index, 1);
      
    }
  }
  
}

function getNotesTemplate(title, index) {

  return `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
  
          <span class = "${title.completed ? 'text-decoration-line-through':''}">${title}</span>
          <span>
            <span data-index="${index}" data-type="toggle" id="success" class="btn btn-small btn-${title.completed ? 'warning':'success'}">&check;</span>
            <span data-index="${index}" data-type="remove" id="no-success" class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>
        `
  
}

const notes = [
  {

    title: "note 1",
    completed: false

  },
  {

    title: "note 2",
    completed: false

  },
];



function render() {

  listEl.innerHTML = "";

  for (let i = 0; i < notes.length; i++){
    listEl.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i].title, i));
  }

}

render();

createEl.onclick = () => {

    if (inputEl.value.length === 0) {
        return;
  }

  const newNote = {
    title: inputEl.value,
    completed: false
  }

  notes.push(newNote);
  render();

    
}







