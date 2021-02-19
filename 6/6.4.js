function isIsogram(str) {
  if (!/^[a-zA-Z]+$/.test(str)) return "error. only letters allowed";

  if (str === "") return true;
  const histogram = str.split("").reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, {});
  for (const [key, value] of Object.entries(histogram)) {
    if (value > 1) return false;
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"));
