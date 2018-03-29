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

test.only("something longer", t => {
  const arr = ["1.0_pt01", "BECOMING TEXAS", "Our understanding of Texas history is always chang…egins long before it was named and drawn on maps.", "Objects and stories from our past help us understa…s and historians continually add to what we know.", "AC_01", "1.0_la01", "Discovered in central Texas, this stone point with a broken tip was made at least 14,000 years ago.", "For many years scientists believed that the first …ts that humans came to the Americas much earlier.", "(TK- Credit Line)", "2.0", "2.0_pt01", "An Ancient History", "What we now call Texas was home to many different peoples for thousands of years.", "More than 3000 years ago farmers settled where the…village 26 miles west of present-day Nacogdoches."]
  const regex = "1.0"

  t.deepEqual(filterRegEx(arr, regex), ["1.0_pt01", "1.0_la01"]);
  t.end();
})

