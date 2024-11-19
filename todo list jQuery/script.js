let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTodos() {
  $('#todo-list').empty();
  tasks.forEach((task, index) => {
    $('#todo-list').append(`
      <li class="flex justify-between items-center bg-gray-200 px-4 py-2 rounded">
        <span>${task}</span>
        <button 
          class="delete-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" 
          data-index="${index}">
          Delete
        </button>
      </li>
    `);
  });
}

function addTask(task) {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTodos();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTodos();
}

$('#todo-form').on('submit', function (e) {
  e.preventDefault();
  const task = $('#todo-input').val().trim();
  if (task) {
    addTask(task);
    $('#todo-input').val('');
  }
});

$('#todo-list').on('click', '.delete-btn', function () {
  const index = $(this).data('index')
  deleteTask(index);
});

renderTodos();
