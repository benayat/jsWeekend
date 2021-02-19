function trimming(str) {
  return str.substring(1, str.length - 1);
}

//tests:
console.log(trimming("baba"));
console.log(trimming("ba"));
console.log(trimming("123"));
