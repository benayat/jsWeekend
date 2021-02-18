function map(array, callback, thisArg = false) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

function callback(currentValue, index = false, array = false) {
  return currentValue / 2;
}

console.log(map([1, 2, 4, 5, 6, 8, 1234, 21], callback));
