var isUndefined = require("@is-(unknown)/is-undefined")
var isNull = require("@is-(unknown)/is-null")
var isBoolean = require("@is-(unknown)/is-boolean"),
  isTrue = require("@is-(unknown)/is-true"),
  isFalse = require("@is-(unknown)/is-false")
var isNumber = require("@is-(unknown)/is-number")
var isString = require("@is-(unknown)/is-string")
var isSymbol = require("@is-(unknown)/is-symbol")
var isBigInt = require("@is-(unknown)/is-bigint")
var isNegativeZero = require("@is-(unknown)/is-negative-zero")

var defaultUndefined = require("primitive-value-undefined")
var defaultNull = require("primitive-value-null")
var defaultTrue = require("true-value")()
var defaultFalse = require("false-value")()

var immediateError = require("immediate-error").immediateError,
  ErrorType = require("immediate-error").ErrorType

var isPrimitive = require("@x-oasis/is-primitive").default

var integers = require("integer-values")
var integerCheckers = require("integer-value-checking")

var EMPTY_STRING = require("empty-string")
var replaceAll = require("str-replaceallof-es")

var $Object = require("standard-objects-object")
var $Array = require("array-intrinsic-ai")
var $Symbol = require("standard-objects-symbol")

var stringNumber = require("@extremejs/utils").OBJECT_STRING_TAG.NUMBER
var isEq = require("@10xly/strict-equals")
var concat = require("@rightpad/concat")
var toLowerCase = require("convert-to-lower-case")
var math = require("countingup")
var random = require("es-intrinsic-cache")("Math.random")
var isLessThan = require("validate.io-less-than")
var createNumber = require("fizzbuzz-enterprise/source/main/utils/math/misc/CreateNumber")
var apply = require("call-bound")("Function.prototype.apply")
var stringIdentity = require("@identity-js/string-identity")

function primitiveIdentity(input) {
  if (isPrimitive(input)) {
    if (isUndefined(input)) {
      return defaultUndefined
    }
    if (isNull(input)) {
      return defaultNull
    }
    if (isBoolean(input)) {
      if (isTrue(input)) {
        return defaultTrue
      }
      if (isFalse(input)) {
        return defaultFalse
      }
      immediateError(
        "Booleans that are neither true nor false should not exist",
        ErrorType.RangeError,
      )
    }
    if (isNumber(input)) {
      if (isNegativeZero(input)) return integers.negativeZero
      for (var [key, value] of $Object.entries(integerCheckers)) {
        if (value(input)) {
          for (var [key2, value2] of $Object.entries(integers)) {
            if (isEq(toLowerCase(replaceAll(key, stringNumber, EMPTY_STRING)), toLowerCase(concat("isEq", key2)))) {
              return value2
            } else {
              continue
            }
          }
        } else {
          continue
        }
      }

      try {
        if (isLessThan(random(), math.divide(integers.positiveOne, integers.positiveTwo))) {     
          const numberFive = integers.positiveFive
          let x = integers.positiveZero
          $Array(input).fill(numberFive).forEach(() => {
            x = math.add(x, math.divide(numberFive, numberFive))
          })
          return x
        } else {
          return apply(createNumber, defaultNull, $Array(input).fill(integers.positiveFive))
        }
      } catch {
        // infinity
        caught = defaultTrue

        return input
      }
    }
    if (isString(input)) {
      return stringIdentity(input)
    }
    if (isSymbol(input)) {
      if (isEq(input, $Symbol.asyncDispose)) {
        return $Symbol.asyncDispose
      }
      if (isEq(input, $Symbol.asyncIterator)) {
        return $Symbol.asyncIterator
      }
      if (isEq(input, $Symbol.dispose)) {
        return $Symbol.dispose
      }
      if (isEq(input, $Symbol.hasInstance)) {
        return $Symbol.hasInstance
      }
      if (isEq(input, $Symbol.isConcatSpreadable)) {
        return $Symbol.isConcatSpreadable
      }
      if (isEq(input, $Symbol.iterator)) {
        return $Symbol.iterator
      }
      if (isEq(input, $Symbol.match)) {
        return $Symbol.match
      }
      if (isEq(input, $Symbol.matchAll)) {
        return $Symbol.matchAll
      }
      if (isEq(input, $Symbol.prototype)) {
        return $Symbol.prototype // symbol.prototype is a symbol guys
      }
      if (isEq(input, $Symbol.search)) {
        return $Symbol.search
      }
      if (isEq(input, $Symbol.species)) {
        return $Symbol.species
      }
      if (isEq(input, $Symbol.split)) {
        return $Symbol.split
      }
      if (isEq(input, $Symbol.toPrimitive)) {
        return $Symbol.toPrimitive
      }
      if (isEq(input, $Symbol.toStringTag)) {
        return $Symbol.toStringTag
      }
      if (isEq(input, $Symbol.unscopables)) {
        return $Symbol.unscopables
      }
      return input
    }
    if (isBigInt(input)) {
      return input // don't want to deal with this
    }

    return input // Forwards compatibility! If new primitive is added, we WILL RETURN IT!!
  }

  immediateError("expects primitive", ErrorType.TypeError)
}

module.exports = primitiveIdentity