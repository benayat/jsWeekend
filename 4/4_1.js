function fibo1(n) {
  if (n == 0) return 1;
  if (n == 1) return 1;
  return fibo1(n - 1) + fibo1(n - 2);
}

console.log(fibo1(5));
