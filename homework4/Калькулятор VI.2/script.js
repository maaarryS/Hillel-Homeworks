alert("Hello!");

let ifRepeat; 
let resultsLog = [];

do {
  let operator = prompt("Enter the operator (+, -, *, /, pow, sin, cos): ");

  let firstOperand = +prompt("Enter the first operand: ");
  while (firstOperand !== firstOperand) {
    firstOperand = +prompt("Error - Invalid data.\n Enter first operand: ");
  };

  let secondOperand, result;
  switch(operator) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "pow":
      secondOperand = +prompt("Enter second operand: ");
      while(secondOperand !== secondOperand) {
        secondOperand = +prompt("Error - Invalid data.\n Enter second operand: ");
      };
  }
    
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    case "pow":
      result = Math.pow(firstOperand, secondOperand);
      break;
    case "sin":
      result = Math.sin(firstOperand);
      break;
    case "cos":
      result = Math.cos(firstOperand);
      break;
  }

  let formedResult = `Result of operation ${operator} is ${result}`;
  resultsLog[resultsLog.length] = formedResult;

  console.log(formedResult);
  alert(formedResult);

  ifRepeat = confirm("Do you want to repeat?");

} while(ifRepeat);

console.log("History of your operations:")
for (let i = 0; i < resultsLog.length; i++) {
  console.log(resultsLog[i]);
}