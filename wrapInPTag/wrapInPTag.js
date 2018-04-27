const wrapInPTag = text => {
  if(text.startsWith("<p>") && text.endsWith("</p>")) {
    return text;
  }
  
  return text.split("\n\n")
    .map(paragraph => {
      const lines = paragraph.split("\n");
      return lines.map((line, index) => {
        // Don't add <br> at the end of paragraphs
        return index !== lines.length - 1
          ? `${line}<br>`
          : line;
      })
        .join("");
    })
    .map(paragraph => `<p>${paragraph}</p>`)
    .join("");
};

module.exports = wrapInPTag;
