var para = document.getElementById("para");
var Name = document.getElementById("name");
var Password = document.getElementById("password");
// Adding Functions to Button
var Button = document.getElementById("btn");
Button.addEventListener("click", validation);
function validation() {
  if (Name.value === "admin" && Password.value === "123")
    para.textContent = "Welcome";
  else para.textContent = "Not Regestired";
}
