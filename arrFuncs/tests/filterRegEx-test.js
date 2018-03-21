const test = require("tape");
const filterRegEx = require("../filterRegEx");

test("returns an array", t => {
  t.plan(2);
  t.equal(Array.isArray(filterRegEx(["a"], "a")), true);
  t.equal(Array.isArray(filterRegEx(["a"], "c")), true);
});

test("returns correct answer (string passed in)", t => {
  const arr = ["TH_EX01_GP01", "TH_EX01_GP02", "N500.scpr01", "N820.scph02"];
  
  // look for N###.aaa## panels
  const regex = "N[0-9]+.[A-z]+[0-9]{2}";
  t.deepEqual(filterRegEx(arr, regex), ["N500.scpr01", "N820.scph02"]);
  t.end();
});

test("returns correct answer (regex passed in)", t => {
  const arr = ["TH_EX01_GP01", "TH_EX01_GP02", "N500.scpr01", "N820.scph02"];
  
  // look for N###.aaa## panels, case insensitive
  const regex = /N[0-9]+.[A-Z]+[0-9]{2}/i;
  t.deepEqual(filterRegEx(arr, regex), ["N500.scpr01", "N820.scph02"]);
  t.end();
});

test("accepts empty array & returns empty array", t => {
  const arr = [];
  const regex = "hello";
  
  t.deepEqual(filterRegEx(arr, regex), []);
  t.end();
});

