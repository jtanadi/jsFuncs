const removeDupes = (list, matchCase = true) => {
  /* (arr[, bool]) -> [arr, arr]
  Returns an array of 2 arrays:
  - The first is the original list, with duplicated items removed;
  - The second is a list of duplicate items.
  matchCase is an optional bool parameter, true by default
  If matchCase is true, the checker is case-sensitive
    (ie. "foo" !== "Foo")
  */

  const seen = [];
  const dupes = [];

  const clean = list.reduce((collection, listItem) => {
    // Make a copy of the item to transform it
    let listItemCopy = listItem;

    if(!matchCase && typeof listItemCopy === "string") {
      listItemCopy = listItemCopy.toLowerCase();
    }

    if(!seen.includes(listItemCopy)) {
      seen.push(listItemCopy);
      collection.push(listItem);
    } else {
      dupes.push(listItem);
    }
    
    return collection;
  }, []);

  return [clean, dupes];
};

module.exports = removeDupes;

