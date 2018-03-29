const filterOutRegex = function (inputArr, expression) {
  /* (arr, str or regex obj) -> arr of strings

  Returns an array of items that DON'T match passed-in RegEx.
  */
  let exp;
  if(typeof expression === "string") {
    exp = new RegExp(expression);
  } else {
    exp = expression;
  }

  return inputArr.filter(item => !exp.test(item));
};

module.exports = filterOutRegex;
