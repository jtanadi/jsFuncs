const test = require("tape");
const findDupes = require("../findDupes");

test("findDupes base case", t => {
  const input = [1, 2, 1, 4, 2, 5, 3, 3];
  const expected = [1, 2, 3];
  const actual = findDupes(input);

  t.deepEqual(actual, expected);
  t.end();
});
