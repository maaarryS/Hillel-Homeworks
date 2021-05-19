// Functions Declarations

function getNumber(message) {
  let num
  do {
    num = +prompt(message);
  } while (num != num);
  return num;
}

function fillArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = getNumber("Enter the element");
  }
  return array;
}

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++)
   {let v = arr[i], j = i-1;
     while (j >= 0 && arr[j] > v)
      {arr[j+1] = arr[j]; j--;}
      arr[j+1] = v;
   }                    
  return arr;
}

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Main part of code

alert("Hello!");
let arrayLength;

do {
  arrayLength = getNumber("How many elements are in your array? (from 5 to 20)");
 } while (arrayLength < 5 || arrayLength > 20);

let newArray = fillArray(arrayLength);
let sortedArray = sortArray(newArray);
printArray(sortedArray);








