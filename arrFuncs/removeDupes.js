const removeDupes = (list, matchCase = true) => {
  /* (arr[, bool]) -> [arr, arr]
  Returns an array of 2 arrays:
  - The first is the original list, with duplicated items removed;
  - The second is a list of duplicate items.
  matchCase is an optional bool parameter, true by default
  If matchCase is true, the checker is case-sensitive
    (ie. "foo" !== "Foo")
  */

  let seen = [];
  let dupes = [];

  let clean = list.reduce((collection, listItem) => {
    // Make a copy of the item because
    // it's sometimes transformed
    const listItemOrig = listItem

    if(!matchCase && typeof listItem === "string") {
      listItem = listItem.toLowerCase();
    }

    if(!seen.includes(listItem)) {
      seen.push(listItem);
      collection.push(listItemOrig);
    
    } else {
      dupes.push(listItemOrig);
    }
    
    return collection;
  }, [])

  return [clean, dupes];
};

module.exports = removeDupes