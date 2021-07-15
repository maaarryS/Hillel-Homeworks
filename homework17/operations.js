let history = [];
function addToHistory(operation, args, result) {
  let argsStr = args.join(",");

  return `[${operation}:][${argsStr}][${result}]`;

}

function reverse(str) {
  let newString = "";

  for(let i = str.length -1; i >= 0; i--) {
    newString += str[i];
  };
  history.push(addToHistory("reverse", [str], newString));

  return newString;
}

function nTimes(str, times) {
  let newString = "";
  if(times >= 1) {
    newString = str;

    for(let i = 1; i < times; i++) {
      newString += `
      ${str}`;
    }
  }
  history.push(addToHistory("nTimes", [str, times], newString));

  return newString;
}

function removeDuplicates(str) {
  let arr = str.split("");
  let resultArr = [];

  arr.forEach(e => {
    if(!resultArr.includes(e)) {
      resultArr.push(e);
    }
  })

  let result = resultArr.join("");
  history.push(addToHistory("removeDuplicates", [str], result));
  
  return result;
}

function getParts(str) {
  let resultLength = Math.floor(str.length / 2);
  let result = str.slice(0, resultLength);

  history.push(addToHistory("getParts", [str], result));

  return result;
}


function getHistory() {
  for(let item of history)
    console.log(item);
}


export {reverse, nTimes, removeDuplicates, getParts, getHistory};