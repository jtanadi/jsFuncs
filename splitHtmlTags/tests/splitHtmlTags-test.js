const test = require("tape");
const splitHtmlTags = require("../splitHtmlTags");

test("base case", t => {
  const expected = ["<tag>", "Text body here", "</tag>"];
  const actual = splitHtmlTags("<tag>Text body here</tag>");
  
  t.deepEqual(expected, actual);
  t.end();
});

test("tagged in the middle of a sentence", t => {
  const expected = ["First part here ", "<tag>", "Tagged text here", "</tag>"];
  const actual = splitHtmlTags("First part here <tag>Tagged text here</tag>");

  t.deepEqual(expected, actual);
  t.end();
});

test("multiple tags per sentence", t => {
  const expected = [
    "Start here ",
    "<tag1>",
    "Inside of tag 1",
    "</tag1>",
    " Non tagged text ",
    "<tag2>",
    "Inside of tag 2",
    "</tag2>",
    " End of line",
  ];
  
  const actual = splitHtmlTags("Start here <tag1>Inside of tag 1</tag1> Non tagged text <tag2>Inside of tag 2</tag2> End of line");

  t.deepEqual(expected, actual);
  t.end();
});

test("tags inside of tags", t => {
  const actual = splitHtmlTags("<a><b><c>Text in here</c></b></a>");
  const expected = ["<a>", "<b>", "<c>", "Text in here", "</c>", "</b>", "</a>"];

  t.deepEqual(actual, expected);
  t.end();
});

test("quotes inside of tags", t => {
  const actual = splitHtmlTags("<a href=\"http://google.com\" target=\"_blank\">Link here</a>");
  const expected = [
    "<a href=\"http://google.com\" target=\"_blank\">",
    "Link here",
    "</a>",
  ];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 1: space after opening bracket", t => {
  const actual = splitHtmlTags("< abcdef><tag>hey</a>");
  const expected = ["< abcdef>", "<tag>", "hey", "</a>"];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 2: space before & after opening bracket", t => {
  const actual = splitHtmlTags("this < that>");
  const expected = ["this < that>"];
  
  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 3: space before closing bracket", t => {
  const actual = splitHtmlTags("that<this >");
  const expected = ["that", "<this >"];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 4: false tag - no opening bracket", t => {
  const actual = splitHtmlTags("false>hello</false>");
  const expected = ["false>hello", "</false>"];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 5: tag with space in the middle", t => {
  const actual = splitHtmlTags("<tag hey>hello</tag>");
  const expected = ["<tag hey>", "hello", "</tag>"];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 6: tag has \">\" and/or \"<\"", t => {
  const actual = splitHtmlTags("<tag class=\">\">hello</tag>");
  const expected = ["<tag class=\">\">", "hello", "</tag>"];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 7: tag has '>' or '<'", t => {
  const actual = splitHtmlTags("<tag class='>'>hello</tag>");
  const expected = ["<tag class='>'>", "hello", "</tag>"];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 8: tags surrounded by quotes", t => {
  const actual = splitHtmlTags("\"<div class=\">\">hello</div>\"");
  const expected = ["\"", "<div class=\">\">", "hello", "</div>", "\""];

  t.deepEqual(actual, expected);
  t.end();
});
