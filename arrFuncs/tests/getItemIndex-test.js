const test = require('tape')
const getItemIndex = require('../getItemIndex')

test("returns an array", (t) => {
  t.equal(Array.isArray(getItemIndex(["a", "b", "c"], "b")), true)
  t.end()
})