const removeDupes = (list, checkCase) => {
  /* (arr[, bool]) -> arr, arr
  Returns an array of 2 arrays:
  - The first is the original list, with duplicated items removed;
  - The second is a list of duplicate items.
  checkCase is an optional bool parameter, false by default
  If checkCase is true, the checker is case-sensitive
    (ie. "foo" !== "Foo")
  */

  let seen = [];
  let dupes = [];

  let clean = list.reduce((collection, listItem) => {
    if(!checkCase && typeof listItem === "string") {
      listItem = listItem.toLowerCase();
    }

    if(!seen.includes(listItem)) {
      seen.push(listItem);
      collection.push(listItem);
    
    } else {
      dupes.push(listItem);
    }
    
    return collection;
  }, [])

  return [clean, dupes];
};
