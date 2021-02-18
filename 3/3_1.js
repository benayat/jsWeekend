function nb_year(p0, percent, aug, p) {
  if (!aug) return "not able to calculate percent";
  let pCurrent = p0;
  let counter = 0;
  while (pCurrent < p) {
    pCurrent = pCurrent * (1 + percent / 100) + aug;
    counter++;
  }
  return counter;
}
console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
