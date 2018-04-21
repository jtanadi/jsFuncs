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

test("edge case 1", t => {
  const actual = splitHtmlTags("< abcdef><tag>hey</a>");
  const expected = ["< abcdef>", "<tag>", "hey", "</a>"];

  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 2", t => {
  const actual = splitHtmlTags("this < that>");
  const expected = ["this < that>"];
  
  t.deepEqual(actual, expected);
  t.end();
});

test("edge case 3", t => {
  const actual = splitHtmlTags("this> that<this >");
  const expected = ["this> that<this >"];

  t.deepEqual(actual, expected);
  t.end();
});
