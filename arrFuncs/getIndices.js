const getIndices = function (inputArr, itemToIndex, useRegex = false) {
  /* (arr, str || num || regex obj[, bool]) -> arr of nums
  Like Array.prototype.indexOf(), but returns all
  indices instead of first index

  Looks through input array and logs the index number(s)
  of itemToIndex. 
  
  If useRegex is true, the function will treat itemToIndex as 
  an expression. useRegex is false by default.
  */

  if(!Array.isArray(inputArr)) throw new Error("First argument must be an array")

  let exp;
  if(useRegex) {
    if(typeof itemToIndex === "string" || typeof itemToIndex === "number") {
      exp = new RegExp(itemToIndex);
    
    } else {
      exp = itemToIndex;
    }
  }
  
  return inputArr.reduce((returnIndices, item, index) => {
    if(useRegex) {
      if(exp.test(item)) returnIndices.push(index);
    
    } else {
      if(item === itemToIndex) returnIndices.push(index);
    }

    return returnIndices;
  }, []);
}

module.exports = getIndices