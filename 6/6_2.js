function duplicates(str) {
  const histogram = str.split("").reduce((accumulator, value, index) => {
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
