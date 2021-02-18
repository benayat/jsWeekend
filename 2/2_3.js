function findNextSquare(number) {
  let newNumber = number;
  if (!Number.isInteger(newNumber) || !Number.isInteger(Math.sqrt(newNumber))) {
    return -1;
  }
  newNumber++;
  while (!Number.isInteger(Math.sqrt(newNumber))) {
    newNumber++;
  }
  return newNumber;
}
console.log(findNextSquare(625));
