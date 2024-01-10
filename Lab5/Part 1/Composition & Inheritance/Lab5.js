//==Verification Functions================================================
// Verifying Number Function
function verifyNumber(age, dimension) {
  while (isNaN(age)) {
    alert("This isn't a Valid Number");
    age = prompt(`Please, Re-Enter the ${dimension}: `);
  }
}
//--------------------------------------------------------------------------
// Verifying Name/String Function
function verifyName(Name) {
  while (!/^[A-Za-z]*$/.test(Name)) {
    alert("This Wasn't a Valid Name");
    Name = prompt("Please, Re-Enter the Name:");
  }
}
//==Classes=================================================================
//----------------//
//--Class Person--//
//----------------//
class Person {
  constructor(fullName, age) {
    // Declaring Properties
    this.fullName = fullName;
    this.age = age;
    this.money;
    this.sleepMood;
    this.healthRate;
  }
  // Declaring Methods
  // Sleep Method
  sleep(hours) {
    if (hours == 7) this.sleepMood = "Happy";
    else if (hours < 7) this.sleepMood = "Lazy";
    else this.sleepMood = "Tired";
  }
  // Eat Method
  eat(meals) {
    switch (meals) {
      case 0:
        this.healthRate = 0;
        break;
      case 1:
        this.healthRate = 50;
        break;
      case 2:
        this.healthRate = 75;
        break;
      case 3:
        this.healthRate = 100;
        break;
    }
    return this.healthRate;
  }
  // Buy Method
  buy(items) {
    this.money = this.money - items * 10;
  }
}
//===============================================================
//----------------//
//-Class Employee-//
//----------------//
class Employee extends Person {
  #salary = 0;
  #healthRate;
  static idCount = 1; //Generating Unique ID for Every Employee
  constructor(fullName, age, isManager) {
    // Declaring Properties
    super(fullName, age);
    this.id = Employee.idCount++;
    this.email = Math.random() + "@company.com";
    this.salary = this.moeny;
    this.workMood;
    this.isManager = isManager;
  }
  // Declaring Methods
  // Work Method
  work(hours) {
    if (hours == 8) this.workMood = "Happy";
    else if (hours < 8) this.workMood = "Lazy";
    else this.workMood = "Tired";
  }
  //--------------------//
  // Setters and Getters//
  //--------------------//
  // Salary Setters and Getters
  set salary(value) {
    if (value < 1000) this.#salary = 1000;
    else this.#salary = value;
  }

  get salary() {
    return this.#salary;
  }
  //-----------------------------------------------------------------
  // Health Rate Setters and Getters
  sethealthRate(value) {
    this.#healthRate = this.eat(value);
    while (this.#healthRate < 0 || this.#healthRate > 100) {
      alert("Meals Must be between 0 and 3");
      value = prompt("Enter Number of Meals");
      this.#healthRate = this.eat(value);
    }
  }

  gethealthRate() {
    return this.#healthRate;
  }
}
//-----------------------------------------------------------------
//----------------//
//--Class Office--//
//----------------//
class Office {
  // Declaring Properties
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  // Declaring Methods
  getAllEmployees() { //--Get All Employees
    console.log(this.employees);
  }
  //--------------------------------------------------------------------
  getEmployee(
    emplid //--Get Employee Using ID
  ) {
    var i = 0;
    for (var key of this.employees) {
      if (key.id == emplid) {
        console.log(this.employees[i]);
      }
      i++;
    }
  }
  //--------------------------------------------------------------------
  hire(
    array //--Add Employee to Office.Employees[]
  ) {
    var name = prompt("Emter Employee Name");
    verifyName(name);
    var age = prompt("Enter the Employee Age");
    verifyNumber(age);
    var isManage = prompt("Choose Manager(mngr) or Normal Employee(nrml): ");
    verifyIsManage(isManage);
    var employee = new Employee(name, age, isManage);
    array.push(employee);
  }
  //--------------------------------------------------------------------
  fire(
    array //--Delete Employee from Office.Employees Using ID
  ) {
    var idDel = prompt("Enter Employee ID to Delete: ");
    var i = 0;
    for (var key of this.employees) {
      if (key.id == idDel) {
        array.pop(this.employees[i]);
      }
      i++;
    }
  }
}
//=================================================================================
//Functions
// Verifying user Input
function verifyInput(array, input) {
  var isValidInput = array.includes(input);
  while (!isValidInput) {
    alert("This Wasn't a Valid Input");
    input = prompt("Please, Re-Enter Your Option:");
    isValidInput = array.includes(input);
  }
  return input;
}
//---------------------------------------------------------------------------------
//--Verifying Manager or Normal Employee
function verifyIsManage(value) {
  var status = ["mngr", "nrml"];
  var isValidStatus = status.includes(value);
  while (!isValidStatus) {
    alert("This Wasn't a Valid Input");
    value = prompt("Please, Re-Enter Employee Status(mngr / nrml):");
    isValidStatus = status.includes(value);
  }
  return value;
}
//---------------------------------------------------------------------------------
//--Executing user input  (Using Switch-Case to Determine the suitable Action for User Input)
function execute(input, office) {
  switch (input) {
    case "hire":
      office.hire(office.employees);
      break;
    case "fire":
      office.fire(office.employees);
      break;
    case "getall":
      office.getAllEmployees();
      break;
    case "get":
      var id = prompt("Enter Employee ID: ");
      var result = office.getEmployee(id);
      console.log(result);
      break;
    case "q":
      anotherAttempt = false;
      break;
  }
}
//==Program Main Block============================================================
var options = ["hire", "fire", "get", "getall", "q"]; // Used to Validate User Input
var status = ["mngr", "nrml"]; // Used to Validate Employee Status
var office = new Office("Main"); // Create an Office Object
anotherAttempt = true;

while (anotherAttempt) {
  alert(
    "Options:\n1. Hire Employee(hire)\n2. Fire Employee(fire)\n3. Get Employee(get)\n4. Get All Employees(getall)\n5. Quiet(q)"
  );
  var input = prompt("Enter Your Option: ");
  input = verifyInput(options, input.toLowerCase());
  execute(input, office); // It takes an Office Object so we can access the Class Functions
}
