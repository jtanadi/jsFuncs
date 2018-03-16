const randomRange = require('../randomRange/randomRange')

const generateArray = (minLength, maxLength) => {
  /* (int[, int]) -> arr
  Returns an array of random numbers, with lengths:
  - If only 1 number is passed in, array will be specified length
  - If no numbers are passed in, array will be random length, max 10
  - If 2 numbers are passed in, array will be random length
    between those values (min/max-order agnostic)
  */

  let arrLength = minLength || randomRange(10);

  if(typeof maxLength !== "undefined") {
    arrLength = randomRange(minLength, maxLength);
  }

  let retArray = [];
  for(let i = 0; i < arrLength; i++) {
    retArray.push(Math.round(Math.random() * 100));
  }

  return retArray;
};

module.exports = generateArray