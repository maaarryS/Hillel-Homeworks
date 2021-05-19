const first = calc(4);

function calc(initValue) {
  return {
    add: (e) => initValue += e,
    sub: (e) => initValue -= e,
    div: (e) => initValue /= e,
    mult: (e) => initValue *= e,
    getResult: () => initValue
  };
}


console.log(first.add(33));
console.log(first.sub(12));
console.log(first.div(2));
console.log(first.mult(4));
console.log(first.getResult());
