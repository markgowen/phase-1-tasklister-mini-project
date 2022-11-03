document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.querySelector("#create-task-form");
  const newTaskDescription = document.querySelector("#new-task-description");
  const newListItem = document.querySelector("#tasks");
  
  createTaskForm.addEventListener("submit", createNewTask);
});


const createNewTask = e => {
  e.preventDefault();
  const newTaskDescription = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  newTask.textContent = newTaskDescription.value;

  appendNewTask(newTask);
  e.target.reset();

}

const appendNewTask = task => {
  document.querySelector("#tasks").appendChild(task);
}

