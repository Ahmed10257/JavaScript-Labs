alert("This is the First Release of a Calculator with Summation Feature");
var num1 = Number(prompt("Enter The First Number: "));
//Confirming the first number
while (isNaN(num1)) {
  alert("This isn't a Valid Number");
  num1 = prompt("Please, Re-Enter The First Number: ");
}
//Confirming the Second Number
var num2 = Number(prompt("Enter The Second Number: "));
while (isNaN(num2)) {
  alert("This isn't a Valid Number");
  num2 = prompt("Please, Re-Enter The Second Number: ");
}
// a Function to add the two numbers
function add(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 + num2;
}
result = add(num1, num2);
//Typing on the result on the main page
document.write(`The Summation of your numbers is ${result}`);
