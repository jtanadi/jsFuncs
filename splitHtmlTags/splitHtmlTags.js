const splitHtmlTags = taggedStr => {
  let inTag;
  let word = "";

  const startTag = (str, index) => {
    // If the next letter IS a space, then it's not a tag
    // (it's a "greater than" sign...)
    return str[index] === "<" && str[index + 1] !== " ";
  };

  const endTag = (str, index) => {
    // If NOT inTag, then ">" is a "smaller than" sign
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
