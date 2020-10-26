const randomNumbers = [10, 4, 5, 1, 7, 3, 9];

console.log(randomNumbers.toString());

const sortedNumbers = randomNumbers.sort(function (a, b) {
  return a - b;
});

console.log(sortedNumbers.toString());
