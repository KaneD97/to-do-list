// Import stylesheets
import "./style.css";

// Write Javascript code!
document.getElementById("addBtn").addEventListener("click", function(e) {
  clicked();
});

document.getElementById("refreshBtn").addEventListener("click", function(e) {
  refresh();
});
function clicked() {
  let input = document.getElementById("search");
  let data = input.value;
  let ul = document.getElementById("ul");

  var li = document.createElement("li");
  var chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  li.appendChild(chk);
  var t = document.createTextNode(data);
  li.appendChild(t);
  if (data === "") {
    alert("You must write something!");
  } else {
    ul.appendChild(li);
  }
}

function refresh(){
let li = document.querySelectorAll("input[type='checkbox']");
let checked = 0;
li.forEach(function(e){
  if(e.checked){
    checked++;
  }
});
let p = document.getElementById("p").innerText = "You have completed " + checked + " tasks";
}
