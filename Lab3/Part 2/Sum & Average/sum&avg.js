var howManyNumbers = prompt("How many Numbers Do you want to Enter ?");
//Validating User Input
while (isNaN(howManyNumbers)) {
  alert("This isn't a Valid Number");
  howManyNumbers = prompt(
    "Please, Re-Enter How many Numbers Do you want to Enter: "
  );
}

var numbersArray = [];
var arr = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
];
// Input Process
for (let i = 0; i < howManyNumbers; i++) {
  // Taking a Number
  let x = Number(prompt(`Enter the ${arr[i]} Number: `));
  console.log(x);
  // Validating the Number
  while (isNaN(x) || x === undefined) {
    alert("This isn't a Valid Number");
    x = Number(prompt(`Please, Re-Enter the ${arr[i]} Number: `));
  }
  // Adding the number to the array
  numbersArray.push(x);
}

var arrayLength = numbersArray.length;

var sum = 0;
for (let i = 0; i < arrayLength; i++) {
  sum += numbersArray[i];
}

var avg = sum / arrayLength;

document.write(
  `The Summation of your Numbers is ${sum} <br> The Average of your Numbers is ${avg}`
);
