const test = require('tape')
const findDifference = require("../compare2Arrs").findDifference
const findSame = require("../compare2Arrs").findSame

test("both functions return arrays when values are passed in", (t) => {
  t.plan(2)

  t.equal(Array.isArray(findDifference([1], [1])), true)
  t.equal(Array.isArray(findSame([1], [1])), true)
})

//findDifference tests

test("findDifference returns array of null when difference not found", (t) => {
  t.plan(1)

  t.deepEqual(findDifference([1], [1]), [ null, null ])
})

test("findDifference returns differences (base case)", (t) => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [1, 2, 6, 4, 5]
  
  t.deepEqual(findDifference(arr1, arr2), [ [3], [6] ])
  t.end()
})

test("findDifference returns differences (arr1 empty)", (t) => {
  const arr1 = []
  const arr2 = [1, 2, 3, 4, 5]
  
  t.deepEqual(findDifference(arr1, arr2), [ null, [1, 2, 3, 4, 5] ])
  t.end()
})


test("findDifference returns differences (arr2 empty)", (t) => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = []
  
  t.deepEqual(findDifference(arr1, arr2), [ [1, 2, 3, 4, 5], null ])
  t.end()
})

test("findDifference returns differences (only in arr1)", (t) => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [1, 2, 3]
  
  t.deepEqual(findDifference(arr1, arr2), [ [4, 5], null ])
  t.end()
})

test("findDifference returns differences (only in arr2)", (t) => {
  const arr1 = [1, 2, 3]
  const arr2 = [1, 2, 3, 4, 5]
  
  t.deepEqual(findDifference(arr1, arr2), [ null, [4, 5] ])
  t.end()
})

test("findDifference throws error when non-arrays are passed in (arr1 undefined)", (t) => {
  const arr1 = undefined
  const arr2 = [1, 2, 3, 4, 5]

  function throwErr() {
    // Wrapped, otherwise the error will NOT
    // be caught and the assertion will fail.
    findDifference(arr1, arr2)
  }

  t.throws(throwErr, Error)
  t.end()
})

test("findDifference throws error when non-arrays passed in (arr2 str)", (t) => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = "hello"

  t.throws(() => findDifference(arr1, arr2))
  t.end()
})

// findSame Tests

test("findSame returns elmts found in both arrs (base case)", (t) => {
  const arr1 = [1, 2, 4, 5, 6]
  const arr2 = [5, 6, 7, 8, 9]
  
  t.deepEqual(findSame(arr1, arr2), [5, 6])
  t.end()
})

test("findSame returns null when nothing is found (arrs with different values)", (t) => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = ["a", "b", "c"]
  
  t.equal(findSame(arr1, arr2), null)
  t.end()
})

test("findSame returns null when nothing is found (2 empty arrs)", (t) => {
  const arr1 = []
  const arr2 = []
  
  t.equal(findSame(arr1, arr2), null)
  t.end()
})

test("findSame throws an error when non-arrays are passed in)", (t) => {
  const arr1 = "hello"
  const arr2 = [1, 2, 3]
  
  t.throws(() => findSame(arr1, arr2), Error)
  t.end()
})