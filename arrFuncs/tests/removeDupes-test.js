const removeDupes = require("../removeDupes")
const test = require("tape")

test("base case", (t) => {
  const list = [1, 2, 3, 1, 1, 4, 5]
  const actual = removeDupes(list)
  const expected = [ [1, 2, 3, 4, 5], [1, 1] ]

  t.deepEqual(actual, expected)
  t.end()
})

test("mixed-case strings: matchCase defaults to true", (t) => {
  const list = ["a", "A", "b", "C", "c"]
  const actual = removeDupes(list)
  const expected = [ ["a", "A", "b", "C", "c"], [] ]
  
  t.deepEqual(actual, expected)
  t.end()
})

test("mixed-case strings: set matchCase to false", (t) => {
  const list = ["a", "A", "b", "C", "c"]
  const actual = removeDupes(list, false)
  const expected =  [ ["a", "b", "C"], ["A", "c"] ]

  t.deepEqual(actual, expected)
  t.end()
})

test("pass in small list", (t) => {
  const list = [1]

  t.deepEqual(removeDupes(list), [[1], []])
  t.end()
})

test("pass in multiple copies with different cases, matchCase is true", (t) => {
  const list = ["aB", "AB", "Ab", "bC", "BC", "Bc", "BC", "AB"]
  const actual = removeDupes(list)
  const expected = [
    ["aB", "AB", "Ab", "bC", "BC", "Bc"],
    ["BC", "AB"]
  ]

  t.deepEqual(actual, expected)
  t.end()
})

test("pass in multiple copies with different cases, matchCase is false", (t) => {
  const list = ["aB", "AB", "Ab", "bC", "BC", "Bc", "BC", "AB"]
  const actual = removeDupes(list, false)
  const expected = [
    ["aB", "bC"],
    ["AB", "Ab", "BC", "Bc", "BC", "AB"]
  ]

  t.deepEqual(actual, expected)
  t.end()
})
