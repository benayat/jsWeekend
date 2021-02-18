function maskify(str) {
  return str
    .split("")
    .map((value, index) => {
      if (
        index !== str.length - 1 &&
        index !== str.length - 2 &&
        index !== str.length - 3 &&
        index !== str.length - 4
      ) {
        return "#";
      } else {
        return value;
      }
    })
    .join("");
}
console.log(maskify("4556364607935616"));
