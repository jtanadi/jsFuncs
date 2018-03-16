const randomRange = require('../randomRange/randomRange')

it("returns an integer", () => {
  expect(Number.isInteger(randomRange(1))).toBeTruthy()
})

it("returns a number <= max passed in", () => {
  const number = Math.round(Math.random() * 10)
  expect(randomRange(number)).toBeLessThanOrEqual(number)
})

it("returns a number between min & max passed in", () => {
  const number1 = Math.round(Math.random() * 10)
  const number2 = Math.round(Math.random() * 10)
  
  let min, max
  if(number1 < number2) {
    min = number1
    max = number2
  } else {
    min = number2
    max = number1
  }

  expect(randomRange(min, max)).toBeGreaterThanOrEqual(min)
  expect(randomRange(min, max)).toBeLessThanOrEqual(max)
})

it("is min/max-order agnostic (max first arg)", () => {
  const number1 = Math.round(Math.random() * 100)
  const number2 = Math.round(Math.random() * 100)
  
  let min, max
  if(number1 < number2) {
    min = number1
    max = number2
  } else {
    min = number2
    max = number1
  }

  expect(randomRange(max, min)).toBeGreaterThanOrEqual(min)
  expect(randomRange(max, min)).toBeLessThanOrEqual(max)
})