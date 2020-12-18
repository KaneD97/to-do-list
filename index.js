// Import stylesheets
import "./style.css";

// Write Javascript code!
document.getElementById("add-task").addEventListener("click", function(e) {
  addTask();
});

function checkItemAlreadyExists(value) {
  return [...document.querySelectorAll("li")].some(t => t.innerText === value);
}

function addTask() {
  const { value } = document.getElementById("type-in-task");

  if (value === "") {
    alert("You must write something!");
    return;
  }

  if (checkItemAlreadyExists(value)) {
    alert("This task already exists!");
    return;
  }

  let taskList = document.getElementById("task-list");
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener('change', updateTaskProgressTitle);
  li.appendChild(input);
  let t = document.createTextNode(value);
  li.appendChild(t);
  taskList.appendChild(li);
}

function updateTaskProgressTitle() {
  const elements = [...document.querySelectorAll("input[type='checkbox']")];
  let checked = elements.filter(checkbox => checkbox.checked).length;
  document.getElementById("task-progress-message").innerText = getStatus(checked);
}

function getStatus(completedTasks) {
  if (completedTasks === 0) {
    return "Complete some tasks!";
  }

  if (completedTasks === 1) {
    return "You have completed 1 task.";
  }

  return `You have completed ${completedTasks} tasks.`;
}
// Instead "1 tasks" change it "1 task" - DONE
// Not have to click refresh button everytime I tick tasks off - DONE
// Replace foreach with Map function and filter - DONE
