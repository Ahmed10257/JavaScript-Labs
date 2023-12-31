var firstName = prompt("Enter Your first name:");
//Confimring The First Name a string containing charachters only
while (!/^[A-Za-z]*$/.test(firstName)) {
  alert("This Wasn't a Valid Name");
  firstName = prompt("Please, Re-Enter Your first name:");
}
var lastName = prompt("Enter Your Last Name: ");
//Confimring The Second Name a string containing charachters only
while (!/^[A-Za-z]*$/.test(lastName)) {
  alert("This Wasn't a Valid Name");
  lastName = prompt("Please, Re-Enter Your Last name:");
}
var fullName = firstName + " " + lastName;
//Confimring The Full Name was entered correct
var confirmation = confirm(`Your Name is ${fullName}, right ?`);

while (!confirmation) {
  firstName = prompt("Re-Enter Your first name:");
  // Confirming again on the First name
  while (!/^[A-Za-z]*$/.test(firstName)) {
    alert("This Wasn't a Valid Name");
    firstName = prompt("Please, Re-Enter Your first name:");
  }
  lastName = prompt("Re-Enter Your Last Name: ");
  // Confirming again on the second name
  while (!/^[A-Za-z]*$/.test(lastName)) {
    alert("This Wasn't a Valid Name");
    lastName = prompt("Please, Re-Enter Your Last name:");
  }
  fullName = firstName + " " + lastName;
  // Confirming the name was entered correctly
  confirmation = confirm(`So, Your Name is ${fullName}, right ?`);
}

var birthYear = prompt("Enter your birth Year: ");
// Confirming the BirthYear is a number
while (isNaN(birthYear)) {
  alert("This isn't a Valid Year");
  birthYear = prompt("Please, Re-Enter Your Birth Year: ");
}
//Confirming the Birth Year was Entered Correctly
var age_confirmation = confirm(`Your Birth Year is ${birthYear}, right ?`);
while (!age_confirmation) {
  birthYear = prompt("Okay,Re-Enter your birth Year: ");
  // Confriming again on the BirthYear is a number
  while (isNaN(birthYear)) {
    alert("This isn't a Valid Year");
    birthYear = prompt("Please, Re-Enter Your Birth Year: ");
  }
  // Confirming the Hirth Year was entered Correctly
  age_confirmation = confirm(`So, Your Birth Year was ${birthYear} ?`);
}
var age = new Date().getFullYear() - birthYear;
// Printing on the Web Page
document.write(`Welcome ${fullName} you are ${age} years old`);
