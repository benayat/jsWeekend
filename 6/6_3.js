function longest(str1, str2) {
  if (!/^[a-zA-Z]+$/.test(str1) || !/^[a-zA-Z]+$/.test(str2))
    return "error. only letters allowed";
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
