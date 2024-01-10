// Object Oriented Programming using JavaScript
//3- Using Objects Linking to Other Objects
const Person = {
  init(fullName, money, sleepMood, healthRate) {
    // Declaring Properties
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
    // Declaring Methods
    this.sleep = function (hours) {
      if (hours == 7) this.sleepMood = "Happy";
      else if (hours < 7) this.sleepMood = "Lazy";
      else this.sleepMood = "Tired";
    };
    this.eat = function (meals) {
      switch (meals) {
        case 1:
          this.healthRate = 50;
          break;
        case 2:
          this.healthRate = 75;
          break;
        case 3:
          this.healthRate = 100;
          break;
        default:
          this.healthRate = "Too Much Food";
          break;
      }
    };
    this.buy = function (items) {
      this.money = this.money - items * 10;
    };
    return this;
  },
};
var ahmed = Object.create(Person);
ahmed.init("Ahmed", 100);
console.log(ahmed);
ahmed.sleep(8);
console.log(ahmed);
