const generateArray = require('../generateArray/generateArray')

it("returns an array", () => {
  expect(Array.isArray(generateArray())).toBeTruthy()
})

it("returns an array.length between 1 and 10", () => {
  // expect(generateArray().length).toBeLessThanOrEqual(10)
  expect(generateArray().length).toBeGreaterThanOrEqual(1)
})

it("returns specified array.length", () => {
  const randomNum = Math.round(Math.random() * 10)
  
  expect(generateArray(randomNum).length).toBe(randomNum)
})

it("returns array.length between min and max", () => {
  const num1 = Math.round(Math.random() * 10)
  const num2 = Math.round(Math.random() * 10)

  let min, max
  if(num1 < num2) {
    min = num1
    max = num2
  } else {
    min = num2
    max = num1
  }
  
  expect(generateArray(min, max).length).toBeGreaterThanOrEqual(min)
  expect(generateArray(min, max).length).toBeLessThanOrEqual(max)
})

it("returns array.length between min and max (order agnostic)", () => {
  const num1 = Math.round(Math.random() * 10)
  const num2 = Math.round(Math.random() * 10)

  let min, max
  if(num1 < num2) {
    min = num1
    max = num2
  } else {
    min = num2
    max = num1
  }
  
  expect(generateArray(max, min).length).toBeGreaterThanOrEqual(min)
  expect(generateArray(max, min).length).toBeLessThanOrEqual(max)
})

it("returns array of integers", () => {
  const randomNum = Math.round(Math.random() * 10)
  const retArray = generateArray(randomNum)

  for(let item of retArray) {
    expect(Number.isInteger(item)).toBeTruthy()
  }
})