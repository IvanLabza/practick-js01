const createEl = document.getElementById("create");

const listEl = document.getElementById("list");

const inputEl = document.getElementById("title");


createEl.onclick = () => {

    if (inputEl.value.length === 0) {
        return;
    }
    
        listEl.insertAdjacentHTML('beforeend',
        `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${inputEl.value}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>
        `

    )
    inputEl.value = "";
    
}

