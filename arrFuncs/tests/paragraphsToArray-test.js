const para = require("../paragraphsToArray")
const test = require('tape')

test("it works (base case)", (t) => {
  t.deepEqual(
    para("Hello\n How are you?\n\n Great!"),
    ["Hello", "How are you?", "Great!"]
  )
  t.end()
})