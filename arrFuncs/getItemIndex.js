const getItemIndex = function (inputArr, itemToFind, useRegex) {
  /* (arr, str or regex obj[, bool]) -> arr of nums

  Looks through input array and logs the index number(s)
  of the passed-in element. 
  If useRegex is true, the function will treat itemToFind as 
  an expression. useRegex is false by default.
  */
  useRegex = useRegex || false;
  let exp;

  if(useRegex) {
    if(typeof itemToFind === "string") {
      exp = new RegExp(itemToFind);
    
    } else {
      exp = itemToFind;
    }
  }
  
  return inputArr.reduce((itemIndex, item) => {
    if(useRegex) {
      if(exp.test(item)) {
        itemIndex.push(inputArr.indexOf(item));
      }
    
    } else {
      if(item === itemToFind) {
        itemIndex.push(inputArr.indexOf(item));
      }
    }
    return itemIndex;
  }, []);
}