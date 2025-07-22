const output = document.querySelector("#output");

const operatorsDiv = document.querySelector("#operators-panel");
const numbersDiv = document.querySelector("#numbers-panel");

const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const point = document.querySelector("#point");
const backspace = document.querySelector("#backspace");

let operators = [...operatorsDiv.querySelectorAll("button")];
let numbers = [...numbersDiv.querySelectorAll("button")];

function operate(operator, num1, num2) {
  let a = parseFloat(num1);
  let b = parseFloat(num2);
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        result = "Can't divide by 0!";
        setTimeout(() => clear.click(), 1000);
        break;
      }
      result = a / b;
      break;
    default:
      return;
  }
  output.textContent = Math.round(result * 10_000) / 10_000;
}

function checkExpression(text) {
  if (text.match(/-?\d+[+\-*/]-?\d+/)) {
    equal.click();
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    let text = output.textContent;
    checkExpression(text);
    if (!text.at(-1).match(/[+\-*/\.]/)) {
      output.textContent += operator.textContent;
    }
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    output.textContent += number.textContent;
  });
});

equal.addEventListener("click", () => {
  let text = output.textContent;

  let operatorMatch = text.match(/-?\d+([+\-*/])-?\d+/);
  if (!operatorMatch) return;
  let operator = operatorMatch[1];

  let operatorIndex = "";
  if (operator === "-") {
    operatorIndex = text.indexOf(operator, 1);
  } else {
    operatorIndex = text.indexOf(operator);
  }

  let operand1 = text.substring(0, operatorIndex).trim();
  let operand2 = text.substring(operatorIndex + 1).trim();

  if (operand1 === "" || operand2 === "") return;

  operate(operator, operand1, operand2);
});

clear.addEventListener("click", () => {
  output.textContent = "";
});

backspace.addEventListener("click", () => {
  let text = output.textContent;
  if (text !== "") {
    output.textContent = text.slice(0, -1);
  }
});

point.addEventListener("click", () => {
  let text = output.textContent;
  if (!text.at(-1).match(/[+\-*/\.]/)) {
    output.textContent += ".";
  }
});
