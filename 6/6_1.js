function accum(str) {
  if (!/^[a-zA-Z]+$/.test(str)) return "error. only letters allowed";
  return str
    .split("")
    .reduce((accumulator, value, index) => {
      accumulator[index] = value
        .repeat(index + 1)
        .charAt(0)
        .toUpperCase()
        .concat(value.repeat(index + 1).slice(1));
      return accumulator;
    }, [])
    .join("-");
}
console.log(accum("abcd"));
console.log(accum("abcd1"));
