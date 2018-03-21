const filterRegEx = function (inputArr, expression) {
  /* (arr, str or regex obj) -> arr of strings

  Returns an array filtered with the passed-in RegEx.
  */
  let exp;
  if(typeof expression === "string") {
    exp = new RegExp(expression);
  } else {
    exp = expression;
  }

  return inputArr.filter(item => exp.test(item));
};

module.exports = filterRegEx;
