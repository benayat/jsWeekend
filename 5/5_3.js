function toCamelCase(str) {
  return str
    .split(/-|_/)
    .map((word, index) =>
      index === 0 || word.charAt(0).isUpperCase
        ? word
        : word.charAt(0).toUpperCase().concat(word.slice(1))
    )
    .join("");
}
console.log(toCamelCase("this-is-going-to-be-awsome"));
console.log(toCamelCase("ThIs-is-going-to-be-awsome"));
console.log(toCamelCase("This-is-going_to-be_awsome"));
