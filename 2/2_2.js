const binaryArrayToNumber = (arr) => {
  let decimal = 0;
  for (let i = 0; i < arr.length; i++) {
    decimal += arr[arr.length - 1 - i] * Math.pow(2, i);
  }
  return decimal;
};
let arr1 = [1, 0, 0];
console.log(binaryArrayToNumber(arr1));
