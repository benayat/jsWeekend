function shortestWord(str) {
  return Math.min(...str.split(" ").map((word) => word.length));
}
console.log(shortestWord("aba is bold and mosmosmos"));
