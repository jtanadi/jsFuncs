const splitHtmlTags = taggedStr => {
  let inTag;
  let word = "";

  const startTag = (str, index) => {
    return str[index] === "<" && str[index + 1] !== " ";
  };

  const endTag = (str, index) => {
    return inTag && str[index] === ">";
  };

  return taggedStr.split("")
    .reduce((returnArray, letter, index) => {
      if(startTag(taggedStr, index)) {
        inTag = true;
        if(word) returnArray.push(word);
        word = "";
      } else if(endTag(taggedStr, index)) {
        inTag = false;
        returnArray.push(`${word}>`);
        word = "";

        // Return at the end of tag (at ">")
        // so ">" doesn't get added to the next word.
        return returnArray;
      }

      word += letter;

      if(index === taggedStr.length - 1) {
        if(word) returnArray.push(word);
      }
        
      return returnArray;
    }, []);
};

module.exports = splitHtmlTags;
