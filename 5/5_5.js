function initials(name) {
  const check = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/);
  if (check[0] !== name) return "illegal input!";
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

console.log(initials("ben tra"));

//regex explanation: ^ and $ are beginning and end of the sentence. [a-zA-Z][a-zA-Z] are only letters.
