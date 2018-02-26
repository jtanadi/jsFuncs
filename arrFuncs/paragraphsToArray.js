const paragraphsToArray = function (textInput) {
  /* (str) -> arr of strings

  Returns an array of non-empty strings split at \n and
  stripped of empty before and after spaces.

  >>> storiesToArray("Hello\n How are you?\n\n Great!")
  ["Hello", "How are you", "Great"]
  */

  return textInput.split("\n")
          .filter(item => item)
          .map(item => item.trim());
};