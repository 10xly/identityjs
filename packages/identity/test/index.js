const assert = require("chai").assert
const identity = require("../index")

describe("identity()", () => {
  it("should return the same number that was passed in", () => {
    const input = 42
    assert.strictEqual(identity(input), 42, "The function should return the number 42.")
  })

  it("should return the same decimal that was passed in", () => {
    const input = 3.2
    assert.strictEqual(identity(input), 3.2, "The function should return 3.2")
  })

  it("should return the same negative number that was passed in", () => {
    const input = -5
    assert.strictEqual(identity(input), -5, "The function should return the number -5.")
  })

  it("should return -0 when -0 is passed in", () => {
    const input = -0
    const result = identity(input)
    assert.strictEqual(result, -0, "The function should return -0.")
    assert.isTrue(Object.is(result, -0), "The function should return the exact value of -0.")
  })
  
  it("should return the same string that was passed in", () => {
    const input = "hello world"
    assert.strictEqual(identity(input), "hello world", 'The function should return the string "hello world".')
  })

  it("should return an empty string", () => {
    assert.strictEqual(identity(""), "")
  })

  it("should return the same object reference that was passed in", () => {
    const inputObject = { a: 1, b: "test" }
    const result = identity(inputObject)
    assert.strictEqual(result, inputObject, "The function should return the exact same object reference.")
    assert.deepEqual(result, { a: 1, b: "test" }, "The object content should be the same.")
  })

  it("should return the same boolean value (true)", () => {
    const input = true
    assert.strictEqual(identity(input), true, "The function should return the boolean true.")
  })

  it("should return the same boolean value (false)", () => {
    assert.strictEqual(identity(false), false)
  })

  it("should return null when null is passed in", () => {
    const input = null
    assert.strictEqual(identity(input), null, "The function should return null.")
  })

  it("should return undefined when undefined is passed in", () => {
    const input = undefined
    assert.strictEqual(identity(input), undefined, "The function should return undefined.")
  })

  it("should return NaN when NaN is passed in", () => {
    const input = NaN
    assert.isNaN(identity(input), "The function should return NaN")
  })

  it("should return Infinity when Infinity is passed in", () => {
    const input = Infinity
    assert.strictEqual(identity(input), Infinity, "The function should return infinity")
  })

  it("should return -Infinity", () => {
    assert.strictEqual(identity(-Infinity), -Infinity)
  })

  it("should return the same BigInt", () => {
    const input = BigInt(9007199254740991)
    assert.strictEqual(identity(input), input)
  })

  it("should return the same Symbol", () => {
    const sym = Symbol("foo")
    assert.strictEqual(identity(sym), sym)
  })

  it("should return the same array reference", () => {
    const arr = [1, 2, 3]
    assert.strictEqual(identity(arr), arr)
  })

  it("should return the same function reference", () => {
    const fn = (x) => x
    assert.strictEqual(identity(fn), fn)
  })

  it("should return the same Date object reference", () => {
    const date = new Date()
    assert.strictEqual(identity(date), date)
  })

  it("should return the same RegExp object reference", () => {
    const re = /abc/g
    assert.strictEqual(identity(re), re)
  })

  it("should return the same Map reference", () => {
    const map = new Map()
    assert.strictEqual(identity(map), map)
  })

  it("should return the same Set reference", () => {
    const set = new Set()
    assert.strictEqual(identity(set), set)
  })

  it("should return the same TypedArray reference", () => {
    const buffer = new Int8Array(8)
    assert.strictEqual(identity(buffer), buffer)
  })

  it("should return the same error object", () => {
    const err = new Error("fail")
    assert.strictEqual(identity(err), err)
  })

  it("should return the same arguments object", function () {
    assert.strictEqual(identity(arguments), arguments)
  })

  it("should return the same class reference", () => {
    class Test {}
    assert.strictEqual(identity(Test), Test)
  })

  it("should handle objects with custom valueOf or toString", () => {
    const obj = {
      valueOf: () => 10,
      toString: () => "custom"
    }
    assert.strictEqual(identity(obj), obj)
  })

  it("should return a promise reference without resolving it", () => {
    const promise = Promise.resolve(true)
    assert.strictEqual(identity(promise), promise)
  })
})