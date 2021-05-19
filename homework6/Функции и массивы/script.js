alert("Hello!");

// Factorial

function factorialCycle(x) {
  if (x < 0) return "Error";
  let result = 1;
  for(let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursion(x) {
  if (x < 0) return "Error";
  if (x <= 1) return 1;
  return x * factorialRecursion(x - 1);
}

console.log(factorialCycle(-5)); // Error
console.log(factorialRecursion(0)); // 1
console.log(factorialCycle(8)); // 40320
console.log(factorialRecursion(15)); // 1307674368000

// Array Update

function updateArray(arr, num) {
  let isGreater;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) 
      isGreater = true;
      break;
    }
  if(isGreater) {
    arr.shift();
    arr.push(num);
  } else {
    arr.pop();
    arr.unshift(num);
  }
  return arr;
}

console.log(updateArray([12, 9, 18, 25, 14], 100)); // [9, 18, 25, 14, 100]
console.log(updateArray([12, 9, 18, 25, 14], 5)); // [5, 12, 9, 18, 25]
console.log(updateArray([12, 9, 18, 25, 14], 9)); // [9, 12, 9, 18, 25]