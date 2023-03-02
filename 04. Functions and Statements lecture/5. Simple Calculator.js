function simpleCalculator(num1, num2, operator) {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  const operationMap = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
  };

  return operationMap[operator](num1, num2);

  //   switch (operator) {
  //     case "add":
  //       return add(num1, num2);
  //     case "subtract":
  //       return subtract(num1, num2);
  //     case "divide":
  //       return divide(num1, num2);
  //     case "multiply":
  //       return multiply(num1, num2);
  //     default:
  //       console.log("Invalid Operation");
  //       break;
  //   }
}

console.log(simpleCalculator(5, 5, "multiply"));
console.log(simpleCalculator(12, 19, "add"));
