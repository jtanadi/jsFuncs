const splitHtmlTags = taggedStr => {
  let inTag;
  let inQuote = false;
  let word = "";

  const checkQuote = char => {
    if(inTag && (char === "\"" || char === "'")) inQuote = !inQuote;
  };

  const startTag = (str, index) => {
    // "<" followed by a " " is a "less than" sign
    return str[index] === "<" && str[index + 1] !== " ";
  };

  const endTag = str => {
    // Ignore ">" character if it's surrounded by quotes
    // If NOT inTag, then ">" is a "greater than" sign
    checkQuote(str);
    return !inQuote && inTag && str === ">";
  };

  return taggedStr.split("")
    .reduce((returnArray, letter, index) => {
      // The conditional follows the same pattern:
      // - switch inTag flag
      // - push word to returnArray
      // - Reset word
      if(endTag(letter)) {
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
