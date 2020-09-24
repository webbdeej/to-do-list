let todo = [];

renderTodoList();

document.getElementById("addBtn").addEventListener("click", function () {
  let value = document.getElementById("input").value;
  if (value) {
    todo.push(value);
    saveTodos();
    addInput(value);
  }
});

input.addEventListener("keypress", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("addBtn").click();
  }
});

function addInput(text) {
  //add list item on click
  let listItem = document.createElement("li");
  let list = document.getElementById("myUL");
  let input = document.getElementById("input").value;
  let textNode = document.createTextNode(text);

  //create and append remove button
  let removeBtn = document.createElement("BUTTON");
  list.appendChild(removeBtn);
  removeBtn.className = "removeBtn";
  removeBtn.innerHTML = "Remove item";
  listItem.appendChild(removeBtn);
  list.appendChild(listItem);
  listItem.appendChild(textNode);
  document.getElementById("input").value = "";
  removeBtn.addEventListener("click", removeItem);
  console.log(todo);
}

//remove list item on click
function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let value = parent.textContent;

  todo.splice(todo.indexOf(value, 1));
  this.parentNode.parentNode.removeChild(this.parentNode);
  saveTodos();
}

function renderTodoList() {
  if (!todo) return;
  for (let i = 0; i < todo.length; i++) {
    let value = todo[i];
    addInput(value);
    console.log(value);
  }
}

function saveTodos() {
  let jsonstr = JSON.stringify(todo);
  localStorage.setItem("todo", jsonstr);
}

function getTodos() {
  localStorage.getItem("todo");
  let jsonstr = localStorage.getItem("todo");
  todo = JSON.parse(jsonstr);
  if (!todo || !todo.length) {
    todo = [];
  } else {
    renderTodoList();
  }
}

//cross out text on click
/*document.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');

  }
});*/

//renderTodoList();
getTodos();
