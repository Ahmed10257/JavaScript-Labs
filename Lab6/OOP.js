//==Part One=================================
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    return this.sides * this.sideLength;
  }
}

var square = new Shape("square", 4, 5);
console.log(square.calcPerimeter());

var triangle = new Shape("triangle", 3, 3);
console.log(triangle.calcPerimeter());
//==Part Two=================================
class Square extends Shape {
  constructor(sideLength) {
    super("Square", 4, sideLength);
  }
  name = "Square";
  sides = 4;
  calcArea() {
    return this.sideLength * this.sideLength;
  }
}

var square2 = new Square(3);
console.log(square2);
console.log(square2.calcPerimeter());
console.log(square2.calcArea());
//==Part Three===============================
class Triple {
  static customeName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";

  calculate(n) {
    return Triple.calculate(n) * Triple.calculate(n);
  }
}

console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));
console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.description);
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.customName);
