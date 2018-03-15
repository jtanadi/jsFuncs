const compareArrs = require("../arrFuncs/compare2Arrs.js")
const findDifference = compareArrs.findDifference
const findSame = compareArrs.findSame

// findDifference tests

test("findDifference returns an array", () => {  
  expect(Array.isArray(findDifference([], [])))
    .toBeTruthy()
})

test("findDifference returns differences (base case)", () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [1, 2, 6, 4, 5]
  
  expect(findDifference(arr1, arr2))
    .toEqual([ [3], [6] ])
})

test("findDifference returns differences (arr1 empty)", () => {
  const arr1 = []
  const arr2 = [1, 2, 3, 4, 5]
  
  expect(findDifference(arr1, arr2))
    .toEqual([ null, [1, 2, 3, 4, 5] ])
})

test("findDifference returns differences (arr2 empty)", () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = []
  
  expect(findDifference(arr1, arr2))
    .toEqual([ [1, 2, 3, 4, 5], null ])
})

test("findDifference returns differences (only in arr1)", () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [1, 2, 3]
  
  expect(findDifference(arr1, arr2))
    .toEqual([ [4, 5], null ])
})

test("findDifference returns differences (only in arr2)", () => {
  const arr1 = [1, 2, 3]
  const arr2 = [1, 2, 3, 4, 5]
  
  expect(findDifference(arr1, arr2))
    .toEqual([ null, [4, 5] ])
})

test("findDifference throws error when non-arrays are passed in (arr1 undefined)", () => {
  const arr1 = undefined
  const arr2 = [1, 2, 3, 4, 5]
  
  function nonArray() {
    // Wrapped, otherwise the error will NOT
    // be caught and the assertion will fail.
    findDifference(arr1, arr2)
  }

  expect(nonArray).toThrow()
})

test("findDifference throws error when non-arrays passed in (arr2 str)", () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = "hello"

  expect(() => findDifference(arr1, arr2)).toThrow()
})

// findSame tests

test("findSame returns an array", () => {
  expect(Array.isArray(findSame([1, 2, 3], [1, 2, 3])))
    .toBeTruthy()
})

test("findSame returns elmts found in both arrs (base case)", () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [5, 6, 7, 8, 9]
  
  expect(findSame(arr1, arr2))
    .toEqual([5])
})

test("findSame returns null when nothing is found", () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = []
  
  expect(findSame(arr1, arr2))
    .toEqual(null)
})