function bus(busStops) {
  let currentOnTheBus = 0;
  for (array of busStops) {
    currentOnTheBus += array[0] - array[1];
    if (currentOnTheBus < 0)
      return "error - passangers can't leave an empty bus";
  }
  return currentOnTheBus;
}
console.log(
  bus([
    [2, 0],
    [4, 1],
    [8, 5],
    [0, 2],
    [1, 0],
  ])
);
