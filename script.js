let output = document.querySelector("#output");

let operatorsDiv = document.querySelector("#operators-panel");
let numbersDiv = document.querySelector("#numbers-panel");

let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let point = document.querySelector("#point");

let operators = [...operatorsDiv.querySelectorAll("button")];
let numbers = [...numbersDiv.querySelectorAll("button")];

function add(a, b) {
  let result = parseFloat(a) + parseFloat(b);
  output.textContent = result;
}
function subtract(a, b) {
  let result = parseFloat(a) - parseFloat(b);
  output.textContent = result;
}
function multiply(a, b) {
  let result = parseFloat(a) * parseFloat(b);
  output.textContent = result;
}
function divide(a, b) {
  let result = parseFloat(a) / parseFloat(b);
  output.textContent = result;
}
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

function checkExpression(text) {
  if (text.match(/[0-9]+[+\-*/][0-9]+/)) {
    equal.click();
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    let text = output.textContent;
    checkExpression(text);
    output.textContent += operator.textContent;
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    output.textContent += number.textContent;
  });
});

equal.addEventListener("click", () => {
  let text = output.textContent;

  let operatorMatch = text.match(/[+\-*/]/);
  if (!operatorMatch) return;
  let operator = operatorMatch[0];

  let operatorIndex = text.indexOf(operator);

  let operand1 = text.substring(0, operatorIndex).trim();
  let operand2 = text.substring(operatorIndex + 1).trim();

  if (operand1 === "" || operand2 === "") return;

  operate(operator, operand1, operand2);
});

clear.addEventListener("click", () => {
  output.textContent = "";
});

point.addEventListener("click", () => {
  output.textContent += ".";
});
