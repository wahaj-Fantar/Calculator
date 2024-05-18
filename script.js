let display = document.getElementById("display-screen");
let num1 = "";
let num2 = "";
let operator = null;



function appendNumber(number) {
  if (operator === null) {
    num1 += number;
    display.value = num1;
  } else {
    num2 += number;
    display.value = num1 + operator + num2;
  }
}

function appendOperator(op) {
  if (num2 !== "") {
    calculate(); 
  }
  operator = op;
  display.value = num1 + operator;
}

function appendDecimal() {
  if (operator === null) {
    num1 += ".";
    display.value = num1;
  } else {
    num2 += ".";
    display.value = num2;
  }
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
      case "%":
      result =  parseFloat(num1) * (parseFloat(num2) / 100);
      break;
  }
  
  display.value = result;
  num1 = result.toString();
  num2 = "";
  operator = null;
}

function clearScreen() {
  num1 = ""; 
  num2 = "";
  operator = null;
  display.value = "0"; 
}

function deleteLast() {
  if (operator === null) {
    num1 = num1.slice(0, -1);
    display.value = num1 || "0"; // Show "0" if num1 is empty
  } else if (num2 !== "") {
    num2 = num2.slice(0, -1);
    display.value = num1 + operator + num2;
  } else {
    operator = null;
    display.value = num1;
  }
}
