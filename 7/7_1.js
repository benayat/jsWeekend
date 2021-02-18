function filter(array, callback, thisArg = false) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
function greaterThen5(value, index, array) {
  return value > 5;
}
console.log(filter([1, 5, 7, 8, 9], greaterThen5));
