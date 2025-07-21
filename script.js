function add(a, b) {}
function subtract(a, b) {}
function multiply(a, b) {}
function divide(a, b) {}
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      console.log("Wrong operator!");
  }
}
