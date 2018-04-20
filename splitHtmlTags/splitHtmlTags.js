const splitHtmlTags = taggedStr => {
  let inTag;
  let tag = "";
  let nonTag = "";

  return taggedStr.split("")
    .reduce((returnArray, letter, index) => {
      if(letter === "<" && taggedStr[index + 1] !== " ") {
        inTag = true;
        if(nonTag) returnArray.push(nonTag);
        nonTag = "";
      
      } else if (inTag && letter === ">") {
        inTag = false;
        returnArray.push(tag + ">");
        tag = "";
        return returnArray
      }
      
      if(inTag) {
        tag+= letter
      } else {
        nonTag += letter;
      }
        
      return returnArray;
    }, [])
}

console.log(splitHtmlTags("hey <tag>beep</tag> bop"))
console.log(splitHtmlTags("<tag1>hey</tag1> bl< >op <tag>beep</tag> bop boop"))

// module.exports = splitHtmlTags;
