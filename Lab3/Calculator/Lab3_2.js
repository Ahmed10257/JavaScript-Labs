var num1 = Number(prompt("Enter The First Number: "));
while (isNaN(num1)) {
  alert("This isn't a Valid Number");
  num1 = Number(prompt("Please, Re-Enter First Number: "));
}

var operators = ["+", "-", "/", "*"];
var another_attempt = true;
while (another_attempt) {
  var operator = prompt("Enter an Operator ( + , - , * , / ): ");
  while (!operators.includes(operator)) {
    alert("That's not a valid Opertator");
    operator = prompt("Re-Enter the Operator ( + , - , * , / ):");
  }

  var num2 = Number(prompt("Enter The Other Number: "));
  while (isNaN(num2)) {
    alert("This isn't a Valid Number");
    num2 = Number(prompt("Please, Re-Enter Other Number: "));
  }
  var result;
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
document.write(`Your Final Result is ${result} `);
