function findUnique(array) {
  let sum = array.reduce((accumulator, value) => accumulator + value);
  const regularNumber = array.find(
    (x) => x == array[array.indexOf(x) + 1] || x == array[array.indexOf(x) + 2]
  );
  return array.find((x) => x != regularNumber);
}
console.log(findUnique([2, 2, 2, 2, 0.5, 2]));
