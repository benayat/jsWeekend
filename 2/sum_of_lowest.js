function sumOfLowestNumbers(numbersArray) {
  const copyArray = [...numbersArray];
  const number1 = copyArray
    .splice(copyArray.indexOf(Math.min(...copyArray)), 1)
    .reduce((x) => x);
  const number2 = Math.min(...copyArray);
  return number1 + number2;
}
console.log(sumOfLowestNumbers([1, 4, 7, 9, 4]));
