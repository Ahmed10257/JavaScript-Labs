// Object Oriented Programming using JavaScript
//4- Using Factory Function
function Person(fullName, money, sleepMood, healthRate) {
  // Declaring Properties
  return {
    fullName,
    money,
    sleepMood,
    healthRate,
    // Declaring Methods
    sleep(hours) {
      if (hours == 7) this.sleepMood = "Happy";
      else if (hours < 7) this.sleepMood = "Lazy";
      else this.sleepMood = "Tired";
    },

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
    },

    buy(items) {
      this.money = this.money - items * 10;
    },
  };
}

var ahmed = Person("Ahmed", 100);
console.log(ahmed);
ahmed.sleep(8);
console.log(ahmed);
