const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// get tasks from local storage or set to empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// renders to-do list
function renderTodos() {
  todoList.innerHTML = ''; // clear the list
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.dataset.index = index; // store index in data attribute
    li.innerHTML = `
      ${task}
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

//add a task
function addTask(task) {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks)); // update local storage
  renderTodos();
}

// delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // remove task from array
  localStorage.setItem('tasks', JSON.stringify(tasks)); // update local storage
  renderTodos();
}

//submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTask(task);
    input.value = ''; // Clear input field
  }
});

//delete task
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.parentElement.dataset.index; // get index from data attribute
    deleteTask(index);
  }
});

// initial render call
renderTodos();
