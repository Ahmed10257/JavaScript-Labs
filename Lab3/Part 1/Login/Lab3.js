var userName = prompt("Enter Your User Name: ");
//Valdiating Username is Characters Only
while (!/^[A-Za-z]*$/.test(userName)) {
  alert("This Wasn't a Valid User Name");
  userName = prompt("Please, Re-Enter Your User Name:");
}
var password = prompt("Enter Your Password: ");

if (userName === "admin" && password === "421$$")
  document.write("Welcome Login Success");
else if (userName !== "admin" && password !== "421$$")
  alert("Wrong User Name and Password");
else if (password !== "421$$") alert("Wrong Password");
else alert("Wrong UserName");
