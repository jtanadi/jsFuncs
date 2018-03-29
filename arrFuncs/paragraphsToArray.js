const paragraphsToArray = function (textInput, trimmed = true) {
  /* (str) -> arr of strings

  Returns an array of non-empty strings split at \n and
  stripped of empty before and after spaces.

  >>> storiesToArray("Hello\n How are you?\n\n Great!")
  ["Hello", "How are you?", "Great!"]
  */

  const retArr = textInput.split("\n")
    .filter(item => item)

  if(!trimmed) {
    return retArr;
  }

  return retArr.map(item => item.trim());
};

module.exports = paragraphsToArray;

