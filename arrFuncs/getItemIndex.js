const getItemIndex = function (inputArr, itemToIndex, useRegex = false) {
  /* (arr, str or regex obj[, bool]) -> arr of nums

  Looks through input array and logs the index number(s)
  of itemToIndex. 
  If useRegex is true, the function will treat itemToIndex as 
  an expression. useRegex is false by default.
  */
  let exp;

  if(useRegex) {
    if(typeof itemToIndex === "string") {
      exp = new RegExp(itemToIndex);
    
    } else {
      exp = itemToIndex;
    }
  }
  
  return inputArr.reduce((itemIndex, item) => {
    if(useRegex) {
      if(exp.test(item)) {
        itemIndex.push(inputArr.indexOf(item));
      }
    
    } else {
      if(item === itemToIndex) {
        itemIndex.push(inputArr.indexOf(item));
      }
    }
    return itemIndex;
  }, []);
}