const randomRange = (int1, int2) => {
  /* (int[, int]) -> int
  Returns a random int between num1 and num2, order agnostic.
  If max is not specified, random int will be between 0 and integer passed.
  */
  let min, max
  if(typeof int2 === "undefined") {
    max = int1;
    min = 0;
  } else if(int1 <= int2) {
    min = int1
    max = int2
  } else {
    min = int2
    max = int1
  }

  return Math.round(Math.random() * (max - min)) + min;
};

module.exports = randomRange