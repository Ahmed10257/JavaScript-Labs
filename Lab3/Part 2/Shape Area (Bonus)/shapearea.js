// Verifying Number Function
function verifyNumber(number, dimension) {
  while (isNaN(number)) {
    alert("This isn't a Valid Number");
    number = prompt(`Please, Re-Enter the ${dimension}: `);
  }
}
// Verifying Shape Selection
function verifyShape(array, shape) {
  var isValidShape = array.includes(shape);
  while (!isValidShape) {
    alert("This Wasn't a Valid Shape");
    shape = prompt("Please, Re-Enter a Shape:");
    isValidShape = array.includes(shape);
  }
  return shape;
}
// Taking User Input function
function input(shape) {
  var dim1;
  var dim2;
  var dimName1;
  var dimName2;
  switch (shape) {
    case "circle":
      dimName1 = dimName2 = "Radius";
      dim1 = prompt(`Enter the ${shape} ${dimName1}: `);
      verifyNumber(dim1, dimName1);
      dim2 = dim1;
      return [dim1, dim2];
    case "square":
      dimName1 = dimName2 = "Side";
      dim1 = prompt(`Enter the ${shape} ${dimName1}: `);
      verifyNumber(dim1, dimName1);
      dim2 = dim1;
      return [dim1, dim2];
    case "rectangle":
      dimName1 = "Width";
      dimName2 = "Length";
      dim1 = prompt(`Enter the ${shape} ${dimName1}: `);
      verifyNumber(dim1, dimName1);
      dim2 = prompt(`Enter the ${shape} ${dimName2}: `);
      verifyNumber(dim2, dimName2);
      return [dim1, dim2];
    case "triangle":
      dimName1 = "Base";
      dimName2 = "Height";
      dim1 = prompt(`Enter the ${shape} ${dimName1}: `);
      verifyNumber(dim1, dimName1);
      dim2 = prompt(`Enter the ${shape} ${dimName2}: `);
      verifyNumber(dim2, dimName2);
      return [dim1, dim2];
    case "parallelogram":
      dimName1 = "Base";
      dimName2 = "Vertical Height";
      dim1 = prompt(`Enter the ${shape} ${dimName1}: `);
      verifyNumber(dim1, dimName1);
      dim2 = prompt(`Enter the ${shape} ${dimName2}: `);
      verifyNumber(dim2, dimName2);
      return [dim1, dim2];
    case "ellipse":
      dimName1 = "Minor Axis";
      dimName2 = "Major Axis";
      dim1 = prompt(`Enter the ${shape} ${dimName1}: `);
      verifyNumber(dim1, dimName1);
      dim2 = prompt(`Enter the ${shape} ${dimName2}: `);
      verifyNumber(dim2, dimName2);
      dim1 = 0.5 * dim1;
      dim2 = 0.5 * dim2;
      return [dim1, dim2];
    case "trapezium":
      dimName1 = "Height";
      let dim3;
      let dimName3 = "First Side";
      dimName2 = "Second Side";
      dim1 = prompt(`Enter the ${shape} ${dimName1}: `);
      verifyNumber(dim1, dimName1);
      dim3 = prompt(`Enter the ${shape} ${dimName3}: `);
      verifyNumber(dim3, dimName3);
      dim2 = prompt(`Enter the ${shape} ${dimName2}: `);
      verifyNumber(dim2, dimName2);
      dim2 = dim2 + dim3;
      return [dim1, dim2];
  }
}
// Calculating Area function
function area(shape, dim1, dim2) {
  var result;
  switch (shape) {
    case "circle":
      result = Math.PI * dim1 * dim2;
      return result;
    case "square":
      result = dim1 * dim2;
      return result;
    case "rectangle":
      result = dim1 * dim2;
      return result;
    case "triangle":
      result = 0.5 * dim1 * dim2;
    case "parallelogram":
      result = dim1 * dim2;
      return result;
    case "ellipse":
      result = Math.PI * dim1 * dim2;
      return result;
    case "trapezium":
      result = 0.5 * dim1 * dim2;
      return result;
  }
}
//Program Beginning
var shapes = [
  "circle",
  "square",
  "rectangle",
  "triangle",
  "parallelogram",
  "ellipse",
  "trapezium",
];
var text = shapes.join("/");
alert(`Select one of the following Shapes ${text}`);
// Taking User Shape
var shape = prompt("Enter the Shape you want:");
shape = verifyShape(shapes, shape.toLowerCase());
// Verifiying User Selection
//var verifyedShape = shape.toLowerCase();
//verifyShape(shapes, shape);
// Taking User Dimenstions
var dimensions = input(shape);
//console.log(dimensions[0]);
//console.log(dimensions[1]);
var Area = area(shape, dimensions[0], dimensions[1]);
console.log(Area);
document.write(`The Area of ${shape} is ${Area}`);
