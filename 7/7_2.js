function forEach(array, callback, thisArg = false) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
  return undefined;
}

function callback(currentValue, index = false, array = false) {
  console.log(array.indexOf(currentValue));
}
forEach([1, 2, 3, 4, 5, 5, 6], callback);

//NOTE: the return value should be undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
