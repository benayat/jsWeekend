function fibo3Find(arraySignature, n) {
  if (n == 1) return arraySignature[0]; //1
  if (n == 2) return arraySignature[1]; //1
  if (n == 3) return arraySignature[2]; //2
  debugger;
  return (
    fibo3Find(arraySignature, n - 1) +
    fibo3Find(arraySignature, n - 2) +
    fibo3Find(arraySignature, n - 3)
  );
}

function fibo3(arraySignature, n) {
  let fiboArray = [];
  if (n == 0) return fiboArray;
  for (let i = 0; i < n; i++) {
    fiboArray.push(fibo3Find(arraySignature, i + 1));
  }
  return fiboArray;
}

console.log(fibo3([1, 1, 2], 5));
