// Import stylesheets
import "./style.css";

// Write Javascript code!
document.getElementById("add-task").addEventListener("click", function(e) {
  addTask();
});

document.getElementById("refresh").addEventListener("click", function(e) {
  refresh();
});

function addTask() {
  const { value } = document.getElementById("search");
  
  if (value === '') {
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
}

function refresh() {
  const elements = [...document.querySelectorAll("input[type='checkbox']")];

  let li = document.querySelectorAll("input[type='checkbox']");
  let checked = 0;
  li.forEach(function(e) {
    if (e.checked) {
      checked++;
    }
  });

  document.getElementById("p").innerText = getStatus(checked);
}

function getStatus(completedTasks) {
  if (completedTasks === 0) {
    return 'Complete some tasks!';
  }

  if (completedTasks === 1) {
    return 'You have completed 1 task.';
  }

  return `You have completed ${completedTasks} tasks.`;
}
// Instead "1 tasks" change it "1 task"
// Not have to click refresh button everytime I tick tasks off
// Replace foreach with Map function and filter
