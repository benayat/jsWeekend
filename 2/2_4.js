function findUnique(array) {
  // let sum = array.reduce((accumulator, value) => accumulator + value);
  const regularNumber = array.find(
    (x) => x == array[array.indexOf(x) + 1] || x == array[array.indexOf(x) + 2]
  );
  return array.find((x) => x != regularNumber);
}
console.log(findUnique([2, 2, 2, 2, 0.5, 2]));
console.log(findUnique([2, 0.5, 2]));
console.log(findUnique([0.5, 2, 2]));
console.log(findUnique([2, 2, 0.5]));

//way of thinking: if x is the same as one of the two next elements - it's the regular number.
