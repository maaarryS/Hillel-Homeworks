(function main(arr) {
  let userArray = arr;
  if (!arr) {
    do{
      userArray = getArrayFromUser("Enter an Array (min 3 number elements, use space to divide them): ");
    } while (userArray.length < 3);
  }
  

  let userChoice = getMenuResult(
    `Choose one operation:
    1. To sort array in ascending order;
    2. To sort array in descending order;
    3. To print only odd values;
    4. To print only even values;
    5. To sum up all values;
    6. To print arithmetic mean value;
    7. To print max value;
    8. To print min value.
    (Write the number of option)`, 8);

  processArray(userArray, userChoice);

  if (confirm("Do you want to repeat?")) {
    if (confirm("Do yo want to repeat with this Array?"))
      main(userArray);
    else 
      main();
  }
}) ();