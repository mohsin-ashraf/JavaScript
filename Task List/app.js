// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector('#filter');
const taskInput = document.querySelector("#task");

// Load all event listeners

loadEventListeners();



// Load all events
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}
// Get tasks from localStorage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(task => {
    // Create li
    const li = document.createElement("li");
    // Append Child 
    li.appendChild(document.createTextNode(task));
    // Adding class to the li
    li.className = "collection-item";
    // Create a link
    const link = document.createElement("a");
    // Adding classes to the link
    link.className = "delete-item secondary-content";
    // Add ICON HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append this link to li
    li.appendChild(link);
    // Append this li to the ul
    taskList.appendChild(li);
  });
}
// Add Task
function addTask(e) {
  e.preventDefault();

  if (taskInput.value == '') {
    alert('Add a task');
    return;
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = "<i class='fa fa-remove'></i>";
  // Append the link to li
  li.appendChild(link);

  // Append the child to ul
  taskList.appendChild(li);

  // Add task to the localStorage
  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = '';
}

// function storeTaskInLocalStorage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // Push the task to tasks
  tasks.push(task);
  // Set back to the localStorage.
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      // Remove task from localStorage.
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
// removeTaskFromLocalStorage from the DOM
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  // Set LocalStorage again
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear tasks
function clearTasks() {
  // One way
  // taskList.innerHTML = '';

  // Other way
  // Its a faster way.
  if (confirm("Are you sure to delete all the tasks?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
  // Clear localStorage
  clearTasksFromLocalStorage();
}

// clearTasksFromLocalStorage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
// Filter tasks
function filterTasks(e) {
  const task = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(item => {
    if (item.firstChild.textContent.toLowerCase().includes(task)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}