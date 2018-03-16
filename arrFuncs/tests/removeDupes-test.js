const removeDupes = require("../removeDupes")
const test = require("tape")

test("base case", (t) => {
  const list = [1, 2, 3, 1, 1, 4, 5]

  t.deepEqual(removeDupes(list), [ [1, 2, 3, 4, 5], [1, 1] ])
  t.end()
})

test("matchCase defaults to true", (t) => {
  const list = ["a", "A", "b"]

  t.deepEqual(removeDupes(list), [ ["a", "A", "b"], [] ])
  t.end()
})

test("set matchCase to false", (t) => {
  const list = ["a", "A", "b"]
 
  t.deepEqual(removeDupes(list, false), [ ["a", "b"], ["A"] ])
  t.end()
})

