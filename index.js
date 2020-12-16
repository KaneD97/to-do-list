// Import stylesheets
import "./style.css";

// Write Javascript code!
document.getElementById("add-task").addEventListener("click", function(e) {
  addTask();
});


function addOnChangeEventListenerToAllTasks(){
[...document.querySelectorAll("input[type='checkbox']")].map(checkbox => checkbox.addEventListener('change',
  updateTaskProgressTitle));
}

function addTask() {
  const { value } = document.getElementById("type-in-task");

  if (value === "") {
    alert("You must write something!");
    return;
  }

  let ul = document.getElementById("ul");
  let li = document.createElement("li");
  let chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  li.appendChild(chk);
  let t = document.createTextNode(value);
  li.appendChild(t);
  ul.appendChild(li);
  addOnChangeEventListenerToAllTasks();
}

function updateTaskProgressTitle() {
  const elements = [...document.querySelectorAll("input[type='checkbox']")];
  let checked = elements.filter(checkbox => checkbox.checked).length;
  document.getElementById("p").innerText = getStatus(checked);
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
