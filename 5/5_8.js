function shortestWordV2(str) {
  const longestLength = Math.max(...str.split(" ").map((word) => word.length));
  return str.split(" ").filter((value) => value.length === longestLength);
}

console.log(shortestWordV2("this is abra kadabraaa abaabaaba"));
