document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.querySelector("#create-task-form");
  
  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTaskDescription = document.querySelector("#new-task-description");
    const list = document.querySelector("#tasks");
    const newTask = document.createElement('li');

    newTask.textContent = newTaskDescription.value;

    list.append(newTask);
    createTaskForm.reset();
    
  });
});


