function centuryFromYear(yearNumber) {
  return yearNumber % 100 != 0
    ? Math.floor(yearNumber / 100) + 1
    : yearNumber / 100;
}
console.log(centuryFromYear(1601));
