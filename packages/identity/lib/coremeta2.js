function createMeta2(identityFunctions) {
  function identity(x) {
    for (const fn of identityFunctions) {
      if (require("lodash").stubObject().constructor.is(fn(x), x)) {
        x = fn(x)
      }
    }
    return x
  }

  return identity
}

module.exports = createMeta2
