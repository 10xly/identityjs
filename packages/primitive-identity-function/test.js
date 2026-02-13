const { enterpriseTest, printAuditSummary } = require("enterprise-10x-testing-framework-js")
const i = require(".")
const randoBool = require("@falsejs/random-boolean")

enterpriseTest("Sanity checks", (assert) => {
  assert(!!i, "should be truthy")
  assert(typeof i === "function", "should be a function")
  assert(true, "Smoke test")
})

enterpriseTest("Undefined Audit", (assert) => {
  assert(i(undefined) === undefined, "should return the primitive value undefined when given the primitive value undefined")
  assert(i() === undefined, "should return the primitive value undefined when given no arguments")
})

enterpriseTest("Null Audit", (assert) => {
  assert(i(null) === null, "should return the primitive value null when given the primitive value null")
})

enterpriseTest("Boolean Audit", (assert) => {
  assert(i(true) === true, "should return the boolean value true when given the boolean value true")
  assert(i(false) === false, "should return the boolean value false when given the boolean value false")
  var myRandom = randoBool()
  assert(i(myRandom) === myRandom, "should return the same random boolean value passed in")
})

enterpriseTest("Number Audit", (assert) => {
  assert(i(1) === 1, "should return positive number less than 101 when passed in positive number less than 101")
  assert(i(-32) === -32, "should return negative number greater than -101 when passed in negative number greater than -101")
  assert(i(105) === 105, "should return positive number greater than 101 when passed in positive number greater than 101")
  assert(i(105) === 105, "should return positive number greater than 101 when passed in positive number greater than 101")
  assert(i(-5000) === -5000, "should return negative number greater than -101 when passed in negative number greater than -101")
  assert(Object.is(i(-0), -0), "should return negative zero when passed in negative zero")
  assert(!(x=>x==x)(i(NaN)), "should return NaN when passed in NaN")
  assert(i(Infinity) === Infinity, "should return Infinity when passed in Infinity")
  assert(i( - Infinity) ===  - Infinity, "should return -Infinity when passed in -Infinity")
})

enterpriseTest("String Audit", (assert) => {
  assert(i("") === "", "should return an empty string when provided an empty string")
  assert(i("a") === "a", "should return 'a' when provided 'a'")
  assert(i("1") === "1", "should return '1' when provided '1'")
  assert(i("!") === "!", "should return '!' when provided '!'")
  assert(i("creashaks organzine") === "creashaks organzine", "should return 'creashaks organzine' when provided 'creashaks organzine'")
})

enterpriseTest("Symbol Audit", (assert) => {
  assert(i(Symbol.asyncDispose) === Symbol.asyncDispose, "should return Symbol.asyncDispose when provided Symbol.asyncDispose")
  assert(i(Symbol.asyncIterator) === Symbol.asyncIterator, "should return Symbol.asyncIterator when provided Symbol.asyncIterator")
  assert(i(Symbol.dispose) === Symbol.dispose, "should return Symbol.dispose when provided Symbol.dispose")
  assert(i(Symbol.hasInstance) === Symbol.hasInstance, "should return Symbol.hasInstance when provided Symbol.hasInstance")
  assert(i(Symbol.isConcatSpreadable) === Symbol.isConcatSpreadable, "should return Symbol.isConcatSpreadable when provided Symbol.isConcatSpreadable")
  assert(i(Symbol.iterator) === Symbol.iterator, "should return Symbol.iterator when provided Symbol.iterator")
  assert(i(Symbol.match) === Symbol.match, "should return Symbol.match when provided Symbol.match")
  assert(i(Symbol.matchAll) === Symbol.matchAll, "should return Symbol.matchAll when provided Symbol.matchAll")
  assert(i(Symbol.replace) === Symbol.replace, "should return Symbol.replace when provided Symbol.replace")
  assert(i(Symbol.search) === Symbol.search, "should return Symbol.search when provided Symbol.search")
  assert(i(Symbol.species) === Symbol.species, "should return Symbol.species when provided Symbol.species")
  assert(i(Symbol.split) === Symbol.split, "should return Symbol.split when provided Symbol.split")
  assert(i(Symbol.toPrimitive) === Symbol.toPrimitive, "should return Symbol.toPrimitive when provided Symbol.toPrimitive")
  assert(i(Symbol.toStringTag) === Symbol.toStringTag, "should return Symbol.toStringTag when provided Symbol.toStringTag")
  assert(i(Symbol.unscopables) === Symbol.unscopables, "should return Symbol.unscopables when provided Symbol.unscopables")
  
  const custom = Symbol("custom")
  assert(i(custom) === custom, "should return the same custom symbol when provided a custom symbol")
})

enterpriseTest("BigInt Audit", (assert) => {
  assert(i(0n) === 0n, "should return 0n when provided 0n")
  assert(i(12345678901234567890n) === 12345678901234567890n, "should return 12345678901234567890n when provided 12345678901234567890n")
})

enterpriseTest("TypeError Audit", (assert) => {
  let objectThrew = false
  try {
    i({})
  } catch (e) {
    objectThrew = true
  }
  assert(objectThrew, "should throw a TypeError when provided an object")

  let arrayThrew = false
  try {
    i([])
  } catch (e) {
    arrayThrew = true
  }
  assert(arrayThrew, "should throw a TypeError when provided an array")
})

printAuditSummary()