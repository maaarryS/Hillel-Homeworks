alert("Hello!");

let operand1 = prompt("Enter first operand");
let operand2 = prompt("Enter second operand");

let sum = +operand1 + +operand2;
let difference = operand1 - operand2;
let multiply = operand1 * operand2;
let division = operand1 / operand2;

console.log(`Calculations are done!
Sum: ${operand1} + ${operand2} = ${sum}
Difference: ${operand1} - ${operand2} = ${difference}
Multiply: ${operand1} * ${operand2} = ${multiply}
Division: ${operand1} / ${operand2} = ${division}
`);