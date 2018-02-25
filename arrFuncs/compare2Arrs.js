const findDifference = (list1, list2) => {
  /* (arr, arr) -> arr
  Returns an array of items in list1 NOT in list2
  */

  let notMatched = list1.reduce((collection, item1) => {
    if(!list2.includes(item1)) {
      collection.push(item1);
    }
    return collection;
  }, [])
  return notMatched;
};

const findSame = (list1, list2) => {
  /* (arr, arr) -> arr
  Returns an array of items in list1 ALSO in list2
  */

  let filtered = list1.reduce((collection, item1) => {
    if(list2.includes(item1)) {
      collection.push(item1);
    }
    return collection;
  }, [])
  return filtered;
};
