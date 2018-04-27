const wrapInPTag = require("../wrapInPTag");
const test = require("tape");

test("base case", t => {
  const expected = "<p>Hello<br>World</p><p>How are<br>you?</p>";
  const actual = wrapInPTag("Hello\nWorld\n\nHow are\nyou?");

  t.equal(expected, actual);
  t.end();
});
