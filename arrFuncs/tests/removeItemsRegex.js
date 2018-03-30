const test = require("tape");
const removeItemsRegex = require("../removeItemsRegex");

test("it works", t => {
  const inputArr = ["Hello", "532245", "how", "are", "23982938", "you", "747", "121233"];
  const regex = "[0-9]+"; // find numbers 1 or more
  
  const actual = removeItemsRegex(inputArr, regex);
  const expected = ["Hello", "how", "are", "you"];

  t.deepEqual(actual, expected);
  t.end();
});
