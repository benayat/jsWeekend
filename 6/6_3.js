function longest(str1, str2) {
  return str1
    .concat(str2)
    .split("")
    .sort()
    .filter((current, index, array) => {
      return array.indexOf(current) == index;
    })
    .join("");
}

console.log(longest("xyaabbbccccdefww", "xyaabbbccccdefww"));
