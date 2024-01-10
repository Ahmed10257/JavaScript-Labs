// Object Oriented Programming using JavaScript
//2- Using Class Syntax
class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    // Declaring Properties
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  // Declaring Methods
  sleep(hours) {
    if (hours == 7) this.sleepMood = "Happy";
    else if (hours < 7) this.sleepMood = "Lazy";
    else this.sleepMood = "Tired";
  }

  eat(meals) {
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
  }

  buy(items) {
    this.money = this.money - items * 10;
  }
}

var ahmed = new Person("Ahmed Mansour", 100);
console.log(ahmed);
ahmed.sleep(8);
console.log(ahmed);
