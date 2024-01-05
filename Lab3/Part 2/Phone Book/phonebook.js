// Add Function
function add(array, name, number) {
  let x = { [name]: number };
  array.push(x);
}
// Search Function
function search(array, value) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let temp = Object(array[i]);
    // Check on Names
    if (Object.keys(temp)[0] == value) {
      alert("Name Found");
      return i;
    }
    let ar = Object.keys(temp);
    let s = ar[0];
    console.log(s);
    console.log(temp[s]);
    // Check on Numbers
    if (temp[s] == value) {
      alert("Number Found");
      return i;
    }
  }
  alert;
}

var contacts = [];
var operations = ["add", "search"];
anotherAttempt = true;
while (anotherAttempt) {
  var operation = prompt("Choose an Operation(add/search):");
  var isValidOperation = operations.includes(operation);
  //console.log(isValidOperation);
  while (!isValidOperation) {
    alert("This Wasn't a Valid Operation");
    operation = prompt("Please, Re-Enter an Operation(add/search):");
    console.log(operation);
    isValidOperation = operations.includes(operation);
    console.log(isValidOperation);
  }
  // If the user Chose Add
  if (operation == "add") {
    // Asking for a Name
    var contactName = prompt("Enter the Name of new Contact:");
    // Validatin the name is characters only
    while (!/^[A-Za-z]*$/.test(contactName)) {
      alert("This Wasn't a Valid Name");
      contactName = prompt("Please, Re-Enter the name of the Contact:");
    }
    // Asking for a Number
    let number = Number(prompt("Enter the Number of the new Contact:"));
    // Validating the Number is not a NAN
    while (isNaN(number)) {
      alert("This isn't a Valid Number");
      number = Number(
        prompt("Please, Re-Enter the Number of the new Contact: ")
      );
    }
    // Add a new Contact
    add(contacts, contactName, number);
  } else {
    // Searching for a Contact
    var vlaueToSearchFor = prompt("Enter Name or Number: ");
    var resultIndex = search(contacts, vlaueToSearchFor);
    console.log(resultIndex);
    console.log(contacts[resultIndex]);
    alert(`That's the Contact + ${JSON.stringify(contacts[resultIndex])}`);
  }
  anotherAttempt = confirm("Do you want to do another Operation ?");
}
console.log(contacts);
