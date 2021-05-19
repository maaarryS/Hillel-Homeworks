alert("Hello!");

let operator = prompt("Enter the operator: ");
let operand1, operand2, operand;

switch(operator) {
  case "+" :
  case "-":
  case "*":
  case "/":
  case "pow":
    operand1 = +prompt("Enter first operand: ");
    operand2 = +prompt("Enter second operand: ");
    break;
  case "sin":
  case "cos":
    operand = +prompt("Enter the operand: ");
    break;
}

let result;
  
if (operator == "+") {
  result = `${operand1} + ${operand2} = ${(operand1 + operand2)}`;
} else if (operator == "-") {
  result = `${operand1} - ${operand2} = ${(operand1 - operand2)}`;
} else if (operator == "*") {
  result = `${operand1} * ${operand2} = ${(operand1 * operand2)}`;
} else if (operator == "/") {
  result = `${operand1} / ${operand2} = ${(operand1 / operand2)}`;
} else if (operator == "pow") {
  result = `${operand1}^${operand2} = ${Math.pow(operand1, operand2)}`;
} else if (operator == "sin") {
  result = `Sin(${operand}) = ${Math.sin(operand)}`; 
} else if (operator == "cos") {
  result = `Cos(${operand}) = ${Math.cos(operand)}`;
}

console.log(`Calculations are done! 
  ${result}
`);
alert(result);
