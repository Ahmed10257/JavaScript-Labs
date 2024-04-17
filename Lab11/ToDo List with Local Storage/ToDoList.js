var Button = document.getElementById("btn");
var textBox = document.getElementById("task");
var Div = document.getElementById("Div");
Button.addEventListener("click", addTask);
//======================================================
const tasksList = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
window.onload = createTask();
console.log(tasksList);
//adding tasks to the tasklist local storage
function createTask() {
  for (var i = 0; i < tasksList.length; i++) {
    var Task = document.createElement("div");
    Task.setAttribute("id", "tsk");
    Task.textContent = tasksList[i];
    Div.insertBefore(Task, textBox);

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
}
//======================================================
function addTask() {
  // creating main div of the task
  var Task = document.createElement("div");
  Task.setAttribute("id", "tsk");
  Task.textContent = textBox.value;
  // createTask(textBox.value);
  Div.insertBefore(Task, textBox);
  tasksList.push(textBox.value);
  localStorage.setItem("tasks", JSON.stringify(tasksList));
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
//=======================================================
// Removing Task Function
function remove(task) {
  Div.removeChild(task);
  localStorage.removeItem(task);
  var index = tasksList.indexOf(task); // find the index of this task in the array
  if (index !== -1) {
    tasksList.splice(index, 1); // remve it
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }
}
//=======================================================
// Marking Done
function done(Task) {
  Task.style.backgroundColor = "lightgreen";
}
//====================================================
