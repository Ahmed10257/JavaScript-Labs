var Button = document.getElementById("btn");
var textBox = document.getElementById("task");
var Div = document.getElementById("Div");
Button.addEventListener("click", addTask);
function addTask() {
  // creating main div of the task
  var Task = document.createElement("div");
  Task.setAttribute("id", "tsk");
  Task.textContent = textBox.value;
  Div.insertBefore(Task, textBox);
  textBox.value = " ";
  // creating buttons
  // green button
  var button2 = document.createElement("button");
  button2.setAttribute("id", "green");
  button2.textContent = "Done";
  Task.appendChild(button2);
  button2.addEventListener("click", function () {
    done(Task);
  });

  // red button
  var button1 = document.createElement("button");
  button1.setAttribute("id", "red");
  button1.textContent = "Remove";
  Task.appendChild(button1);
  button1.addEventListener("click", function () {
    remove(Task);
  });
}

// Removing Task Function
function remove(task) {
  Div.removeChild(task);
}

// Marking Done
function done(Task) {
  Task.style.backgroundColor = "lightgreen";
}
