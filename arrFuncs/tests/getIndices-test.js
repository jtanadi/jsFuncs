const test = require('tape')
const getIndices = require('../getIndices')

test("returns an array", (t) => {
  t.equal(Array.isArray(getIndices(["a", "b", "c"], "b")), true)
  t.end()
})

test("returns [-1] when item not found", (t) => {
  const inputStrings = ["a", "b", "c"]
  const inputNums = [1, 2, 3]
  const inputMixed = [1, 2, 3, "a", "b", "c"]
  
  t.deepEqual(getIndices(inputStrings, "d"), [-1], "string input, string item")
  t.deepEqual(getIndices(inputStrings, /1/), [-1], "string input, regex item")
  t.deepEqual(getIndices(inputNums, 5), [-1], "nums input, num item")
  t.deepEqual(getIndices(inputNums, /5/), [-1], "nums input, regex item")
  t.deepEqual(getIndices(inputMixed, 5), [-1], "mixed input, num item")
  t.deepEqual(getIndices(inputMixed, "d"), [-1], "mixed input, string item")
  t.deepEqual(getIndices(inputMixed, /5/), [-1], "mixed input, regex item")
  t.deepEqual(getIndices(inputMixed, /d/), [-1], "mixed input, regex item")
  t.end()
})

test("returns correct index (strings)", (t) => {
  const input = ["a", "b", "c"]
  const regex = /a/
  t.plan(2)
  t.deepEqual(getIndices(input, "a"), [0], "pass in string as itemToIndex")
  t.deepEqual(getIndices(input, regex), [0], "pass in regex as itemToIndex")
})

test("returns correct indices (strings)", (t) => {
  const input = ["a", "b", "c", "a", "e", "i", "a"]
  const regex = /a/
  const regex2 = "a"

  t.deepEqual(getIndices(input, "a"), [0, 3, 6], "pass in string as itemToIndex")
  t.deepEqual(getIndices(input, regex), [0, 3, 6], "pass in regex as itemToIndex")
  t.deepEqual(getIndices(input, regex2), [0, 3, 6], "pass in string as regex as itemToIndex")
  t.end()
})

test("returns correct indices (numbers)", (t) => {
  const input = [1, 2, 3, 1, 5, 6, 1]
  const regex = /1/
  const regex2 = 1

  t.deepEqual(getIndices(input, 1), [0, 3, 6], "pass in num as itemToIndex")
  t.deepEqual(getIndices(input, regex), [0, 3, 6], "pass in regex as itemToIndex")
  t.deepEqual(getIndices(input, regex2), [0, 3, 6], "pass in num as regex as itemToIndex")
  t.end()
})

test("throws error if non-arrays are passed in as first argument", (t) => {
  t.throws(() => {getIndices("a", "a")}, Error, "String is passed in")
  t.throws(() => {getIndices(1, 1)}, Error, "Number is passed in")
  t.throws(() => {getIndices(undefined, 1)}, Error, "undefined is passed in")
  t.end()
})