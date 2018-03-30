const findDupes = (list, matchCase = true) => {
  /* (arr[, bool]) -> [arr]
  Returns an array of duplicate items.
  matchCase is an optional bool parameter, true by default
  If matchCase is true, the checker is case-sensitive
    (ie. "foo" !== "Foo")
  */

  const seen = [];

  return list.reduce((dupes, listItem) => {
    // Make a copy of the item to transform it
    let listItemCopy = listItem;

    if(!matchCase && typeof listItemCopy === "string") {
      listItemCopy = listItemCopy.toLowerCase();
    }

    if(!seen.includes(listItemCopy)) {
      seen.push(listItemCopy);
    } else {
      dupes.push(listItem);
    }
    
    return dupes;
  }, []);
};

module.exports = findDupes;

