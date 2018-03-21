const flatten = require("../flatten");
const test = require("tape");

test("it works", t => {
  const expected = [1, 2, 3, 4, 5];
  const actual = flatten([1, 2, [3, 4], 5]);
  t.deepEqual(actual, expected);
  t.end();
});

test("can recurse multiple depths", t => {
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = flatten([1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]]);
  t.deepEqual(actual, expected);
  t.end();
});

test("works for single-elmt, single-level arrays", t => {
  const expected = [1];
  const actual = flatten([1]);
  t.deepEqual(actual, expected);
  t.end();
});

test("works for empty arrays", t => {
  const expected = [];
  const actual = flatten([]);
  t.deepEqual(actual, expected);
  t.end();
});
