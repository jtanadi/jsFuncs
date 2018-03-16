const findDifference = (arr1, arr2) => {
  /* (arr, arr) -> arr of 2 arrs
  Returns an array of:
    1) array of items in arr1 NOT in arr2 
    2) array of items in arr2 NOT in arr1
  An empty array returns null
  Throws an error non-arrays are passed in
  */

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Please only pass in arrays")
  }

  let onlyInArr1 = arr1.reduce((collection, item1) => {
    if(!arr2.includes(item1)) {
      collection.push(item1);
    }
    return collection;
  }, [])

  let onlyInArr2 = arr2.reduce((collection, item2) => {
    if(!arr1.includes(item2)) {
      collection.push(item2);
    }
    return collection;
  }, [])

  if(onlyInArr1.length < 1) onlyInArr1 = null
  
  if(onlyInArr2.length < 1) onlyInArr2 = null

  return [ onlyInArr1, onlyInArr2 ];
};

const findSame = (arr1, arr2) => {
  /* (arr, arr) -> arr
  Returns an array of items in arr1 AND in arr2
  Returns null when the result array is empty
  Throws an error non-arrays are passed in
  */

  if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Please only pass in arrays")
  }

  let same = arr1.reduce((collection, item1) => {
    if(arr2.includes(item1)) {
      collection.push(item1);
    }
    return collection;
  }, [])

  if(same.length < 1) {
    same = null
  }
  
  return same;
};

module.exports.findDifference = findDifference
module.exports.findSame = findSame
