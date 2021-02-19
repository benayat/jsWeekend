function toWeirdCase(str) {
  return str
    .split("")
    .map((char, index) =>
      index % 2 == 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

console.log(toWeirdCase("Weird string case"));

//NOTE: there is a mistake/inconsistency in the example given: "Weird string case".
//the first space is counted as a character, and the second is not.
