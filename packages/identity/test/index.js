const assert = require('chai').assert
const identity = require('../index')

describe('identity()', () => {

  it('should return the same number that was passed in', () => {
    const input = 42
    assert.strictEqual(identity(input), 42, 'The function should return the number 42.')
  })

  it('should return the same decimal that was passed in', () => {
    const input = 3.2
    assert.strictEqual(identity(input), 3.2, "The function should return 3.2")
  })

  it('should return the same negative number that was passed in', () => {
    const input = -5
    assert.strictEqual(identity(input), -5, 'The function should return the number -5.')
  })

  it('should return -0 when -0 is passed in', () => {
    const input = -0
    const result = identity(input)
    assert.strictEqual(result, -0, 'The function should return -0.')
    assert.isTrue(Object.is(result, -0), 'The function should return the exact value of -0.')
  })
  
  it('should return the same string that was passed in', () => {
    const input = 'hello world'
    assert.strictEqual(identity(input), 'hello world', 'The function should return the string "hello world".')
  })

  it('should return the same object reference that was passed in', () => {
    const inputObject = { a: 1, b: 'test' }
    const result = identity(inputObject)
    assert.strictEqual(result, inputObject, 'The function should return the exact same object reference.')
    assert.deepEqual(result, { a: 1, b: 'test' }, 'The object content should be the same.')
  })

  it('should return the same boolean value (true)', () => {
    const input = true
    assert.strictEqual(identity(input), true, 'The function should return the boolean true.')
  })

  it('should return null when null is passed in', () => {
    const input = null
    assert.strictEqual(identity(input), null, 'The function should return null.')
  })

  it('should return undefined when undefined is passed in', () => {
    const input = undefined
    assert.strictEqual(identity(input), undefined, 'The function should return undefined.')
  })

  it('should return NaN when NaN is passed in', () => {
    const input = NaN
    assert.isNaN(identity(input), "The function should return NaN")
  })

  it('should return Infinity when Infinity is passed in', () => {
    const input = Infinity
    assert.strictEqual(identity(input), Infinity, "The function should return infinity")
  })
})