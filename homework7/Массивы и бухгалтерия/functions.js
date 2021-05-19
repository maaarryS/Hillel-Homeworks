const SORT_ASCENDING = 1,
      SORT_DESCENDING = 2,
      ODD = 3,
      EVEN = 4,
      SUM = 5,
      ARITHMETIC_MEAN_VALUE = 6,
      MAX = 7,
      MIN = 8;



function getArrayFromUser(message, separator = " ") {
  const userArray = prompt(message);
    return userArray
    .trim()
    .split(separator)
    .map(e => +e)
    .filter(e => !isNaN(e));
}


function getMenuResult(list, maxValue) {
  let userChoice;
  do {
    userChoice = +prompt(list);
  } while (isNaN(userChoice) || userChoice < 1 || userChoice > maxValue);
  return userChoice;
}

function processArray(array, userChoice) {
  let result, separator;
    
    switch(userChoice) {
      case SORT_ASCENDING:
        result = array.sort((a, b) => a - b);
        break;
      case SORT_DESCENDING:
        result = array.sort((a, b) => b - a);
        break;
      case ODD:
        result = array.filter(a => a % 2 !== 0);
        break;
      case EVEN:
        result = array.filter(a => a % 2 === 0);
        break;
      case SUM:
        result = array.reduce((a, b) => a + b, 0);
        break;
      case ARITHMETIC_MEAN_VALUE:
        let sum = array.reduce((a, b) => a + b, 0);
        result = sum / array.length;
        break;
      case MAX:
        result = array.reduce((a, b) => (a > b)? a : b);
        break;
      case MIN:
        result = array.reduce((a, b) => (b > a)? a : b);
        break;
    }
    
    switch(userChoice) {
      case SORT_ASCENDING:
      case SORT_DESCENDING:
      case ODD:
      case EVEN:
        separator = prompt("Enter the separator: ");
        result = result.join(separator);
        break;
    }
    
    console.log(result);
    alert(result);
}