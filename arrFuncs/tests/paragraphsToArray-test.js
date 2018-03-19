const para = require("../paragraphsToArray")
const test = require('tape')

test("it works (base case)", (t) => {
  t.deepEqual(
    para("Hello\n How are you?\n\n Great!"),
    ["Hello", "How are you?", "Great!"]
  )
  t.end()
})

test("doesn't care about how many newlines", (t) => {
  t.deepEqual(
    para("Hello\n\n\n\n\n How are you?\n\n\n\n\n Great!\n\n\n\n"),
    ["Hello", "How are you?", "Great!"]
  )
  t.end()
})

test("works with 1 line paragraph (1 newline)", (t) => {
  const actual = para("Hello\n")
  const expected = ["Hello"]
  
  t.deepEqual(actual, expected)
  t.end()
})

test("works with 1 line paragraph (no newline)", (t) => {
  const actual = para("Hello")
  const expected = ["Hello"]
  
  t.deepEqual(actual, expected)
  t.end()
})

test("empty string passed in", (t) => {
  const actual = para("")
  const expected = []
  
  t.deepEqual(actual, expected)
  t.end()
})

test("long strings passed in", (t) => {
  const actual = para("a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk\nl\nm\nn\no\n")
  const expected = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o"
  ]
  
  t.deepEqual(actual, expected)
  t.end()
})

