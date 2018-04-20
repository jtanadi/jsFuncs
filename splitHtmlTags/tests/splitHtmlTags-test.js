const test = require("tape");
const splitHtmlTags = require("../splitHtmlTags");

test("base case", t => {
  const expected = ["<tag>", "Text body here", "</tag>"];
  const actual = splitHtmlTags("<tag>Text body here</tag>");
  
  t.deepEqual(expected, actual);
  t.end();
})

test("tagged in the middle of a sentence", t => {
  const expected = ["First part here ", "<tag>", "Tagged text here", "</tag>"];
  const actual = splitHtmlTags("First part here <tag>Tagged text here</tag>");

  t.deepEqual(expected, actual);
  t.end();
})

test("multiple tags per sentence", t => {
  const expected = [
    "Start here ",
    "<tag1>",
    "Inside of tag 1",
    "</tag1>",
    " Non tagged text "
    ,"<tag2>",
    "Inside of tag 2",
    "</tag2>",
    " End of line"
  ];
  
  const actual = splitHtmlTags("Start here <tag1>Inside of tag 1</tag> Non tagged text <tag2>Inside of tag 2</tag2> End of line");

  t.deepEqual(expected, actual);
  t.end();
})
