const test = require('tape')
const getItemIndex = require('../getItemIndex')

test("returns an array", (t) => {
  t.equal(Array.isArray(getItemIndex(["a", "b", "c"], "b")), true)
  t.end()
})

test("returns correct index (strings)", (t) => {
  const input = ["a", "b", "c"]
  const regex = /a/
  t.plan(2)
  t.deepEqual(getItemIndex(input, "a"), [0], "pass in string as itemToIndex")
  t.deepEqual(getItemIndex(input, regex, true), [0], "pass in regex as itemToIndex")
})

test("returns correct indices (strings)", (t) => {
  const input = ["a", "b", "c", "a", "e", "i", "a"]
  const regex = /a/
  const regex2 = "a"

  t.deepEqual(getItemIndex(input, "a"), [0, 3, 6], "pass in string as itemToIndex")
  t.deepEqual(getItemIndex(input, regex, true), [0, 3, 6], "pass in regex as itemToIndex")
  t.deepEqual(getItemIndex(input, regex2, true), [0, 3, 6], "pass in string as regex as itemToIndex")
  t.end()
})

test("returns correct indices (numbers)", (t) => {
  const input = [1, 2, 3, 1, 5, 6, 1]
  const regex = /1/
  const regex2 = 1

  t.deepEqual(getItemIndex(input, 1), [0, 3, 6], "pass in num as itemToIndex")
  t.deepEqual(getItemIndex(input, regex, true), [0, 3, 6], "pass in regex as itemToIndex")
  t.deepEqual(getItemIndex(input, regex2, true), [0, 3, 6], "pass in num as regex as itemToIndex")
  t.end()
})

test("throws error if non-arrays are passed in as first argument", (t) => {
  t.throws(() => {getItemIndex("a", "a")}, Error, "String is passed in")
  t.throws(() => {getItemIndex(1, 1)}, Error, "Number is passed in")
  t.throws(() => {getItemIndex(undefined, 1)}, Error, "undefined is passed in")
  t.end()
})