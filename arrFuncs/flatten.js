const flatten = arr => arr.reduce((retArr, item) => {
  if(Array.isArray(item)) {
    return retArr.concat(flatten(item));
  }
  retArr.push(item);
  return retArr;
}, []);

module.exports = flatten;

/* non-recursive... works only for 1 arr in arr
const flattenArray = arr => {
  let retArr = [];
  
  for(const item of arr) {
    if(Array.isArray(item)) {
      retArr = retArr.concat(item);
    } else {
      retArr.push(item);
    }
  }
  return retArr;
};
*/
