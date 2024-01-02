another_attempt = true;
while (another_attempt) {
  var age = prompt("Enter your age: ");
  // Confirming the BirthYear is a number
  while (isNaN(age) || Number(age) <= 0) {
    alert("This isn't a Valid age");
    age = prompt("Please, Re-Enter Your Age: ");
  }
  //Confirming the Birth Year was Entered Correctly
  var age_confirmation = confirm(`Your age is ${age}, right ?`);
  while (!age_confirmation) {
    age = prompt("Okay,Re-Enter your birth Year: ");
    // Confriming again on the BirthYear is a number
    while (isNaN(age) || Number(age) <= 0) {
      alert("This isn't a age");
      age = prompt("Please, Re-Enter Your Age: ");
    }
    // Confirming the Hirth Year was entered Correctly
    age_confirmation = confirm(`So, Your Age was ${age} ?`);
  }

  switch (true) {
    case age <= 10:
      alert("You are a Child");
      break;
    case age <= 18:
      alert("You are Tennager");
      break;
    case age <= 50:
      alert("You are Grown Up");
      break;
    default:
      alert("You are Old, God Bless you");
      break;
  }
  another_attempt = confirm("Want to Try Again?");
}
document.write("That was our second Lab, Thank You !!");
