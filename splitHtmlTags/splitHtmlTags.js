const splitHtmlTags = taggedStr => {
  let inTag;
  let word = "";

  const startTag = (str, index) => {
    // Early exit: if letter isn't "<" OR
    // if the following letter is " " (then "<" is "smaller than")
    if(str[index] !== "<" || str[index + 1] === " ") return false;

    // If there's a space before the closing bracket,
    // then it's not a tag ("<tag >" isn't a tag)
    for(let i = index; i < str.length; i++) {
      if(str[i] === ">" && str[i - 1] === " ") return false;
    }
    return true;
  };

  const endTag = (str, index) => {
    // If NOT inTag, then ">" is a "greater than" sign
    return inTag && str[index] === ">";
  };

  return taggedStr.split("")
    .reduce((returnArray, letter, index) => {
      // The conditional follows the same pattern:
      // - switch inTag flag
      // - push word to returnArray
      // - Reset word
      if(endTag(taggedStr, index)) {
        inTag = false;
        returnArray.push(`${word}>`);
        word = "";

        // Return returnArray at ">" so the character
        // isn't added to the start of a word
        return returnArray;
      } else if(startTag(taggedStr, index)) {
        inTag = true;
        if(word) returnArray.push(word);
        word = "";
      }

      word += letter;
      if(index === taggedStr.length - 1) returnArray.push(word);
        
      return returnArray;
    }, []);
};

module.exports = splitHtmlTags;
