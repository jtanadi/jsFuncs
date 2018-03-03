const generateArray = (minLength = 10, maxLength) => {
  /* (int[, int]) -> arr
  Returns an array of random numbers, with lengths:
  - If only minLength is specified, array will be specified length
  - If no length is specified, array will be random length, max 10
  - If minLength and maxLength are specified, array will be
    random length between those values
  */

  let arrLength = minLength;

  if(typeof maxLength !== "undefined") {
    arrLength = randomRange(minLength, maxLength);
  }

  let retArray = [];
  for(let i = 0; i < arrLength; i++) {
    retArray.push(Math.round(Math.random() * 100));
  }

  return retArray;
};

const randomRange = (min, max) => {
  /* (int[, int]) -> int
  Returns a random int between min and max.
  If max is not specified, random int will be between 0 and integer passed.
  */
  if(typeof max === "undefined") {
    max = min;
    min = 0;
  }
  return Math.round(Math.random() * (max - min)) + min;
};
