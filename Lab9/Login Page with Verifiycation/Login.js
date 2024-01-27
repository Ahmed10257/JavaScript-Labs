var Email = document.getElementById("email");
var Password = document.getElementById("password");
var para = document.getElementById("para");
var EmailErr = document.getElementsByClassName("emailError")[0];
var PassErr = document.getElementsByClassName("passError")[0];
// Adding Functions to Button
var Button = document.getElementById("btn");
Button.addEventListener("click", validation);
Button.addEventListener("click", emailValidation);
Button.addEventListener("click", passwordValidation);

function validation() {
  if (Email.value === "admin@admin.com" && Password.value === "Aa@123456")
    para.textContent = "Welcome";
  else para.textContent = "Not Regestired";
}

function emailValidation() {
  var regex = /^\S+@\S+\.\S+$/;
  if (regex.test(Email.value) == false) {
    EmailErr.textContent = "Please, Enter a Valid Email";
    EmailErr.style.color = "red";
  } else EmailErr.textContent = " ";
}

function passwordValidation() {
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (passwordRegex.test(Password.value) == false) {
    PassErr.textContent = "Please, Enter a Valid Password";
    PassErr.style.color = "red";
  } else PassErr.textContent = " ";
}
