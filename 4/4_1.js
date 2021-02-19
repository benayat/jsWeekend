function fibo1(n) {
  if (n == 0) return 1;
  if (n == 1) return 1;
  return fibo1(n - 1) + fibo1(n - 2);
}

//just for sports - the loop version, instead of recursion.
/* console.log(fibo1(7));

function fibo(n) {
  if (n === 0 || n === 1) return 1;
  fiboArray = [1, 1];
  for (let i = 2; i <= n; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
  }
  return fiboArray[n];
} */
console.log(fibo(7));
