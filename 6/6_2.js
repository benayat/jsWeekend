function duplicates(str) {
  const histogram = str
    .toLowerCase()
    .split("")
    .reduce((accumulator, value) => {
      accumulator[value] = (accumulator[value] || 0) + 1;
      return accumulator;
    }, {});

  let counter = 0;
  for (const [key, value] of Object.entries(histogram)) {
    if (value > 1) counter++;
  }
  return counter;
}

console.log(duplicates("indivisibilities"));
console.log(duplicates("ABBA"));
console.log(duplicates("aA11"));
console.log(duplicates("aabBcde"));
console.log(duplicates("abcde"));
console.log(duplicates("indivisibility"));
