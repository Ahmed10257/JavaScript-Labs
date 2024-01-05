var num1 = Number(prompt("Enter The First Number: "));
// Validating The First Number
while (isNaN(num1)) {
  alert("This isn't a Valid Number");
  num1 = Number(prompt("Please, Re-Enter First Number: "));
}

var operators = ["+", "-", "/", "*"];
var another_attempt = true;
// The Loop to keep reciveing Numbers
while (another_attempt) {
  var operator = prompt("Enter an Operator ( + , - , * , / ): ");
  // Validating the Operator
  while (!operators.includes(operator)) {
    alert("That's not a valid Opertator");
    operator = prompt("Re-Enter the Operator ( + , - , * , / ):");
  }

  var num2 = Number(prompt("Enter The Other Number: "));
  // Validating The Second Number
  while (isNaN(num2)) {
    alert("This isn't a Valid Number");
    num2 = Number(prompt("Please, Re-Enter Other Number: "));
  }
  var result;
  // Doing The Operation
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
  }

  alert(`Your Result is ${result} `);
  another_attempt = confirm("Do you want to change the result?");
}
// Printing The Final Result
document.write(`Your Final Result is ${result} `);
