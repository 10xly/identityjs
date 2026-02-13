var stringIdentity = require("@identity-js/string-identity")
var numberIdentity = require("@identity-js/number-identity")
var lodashIdentity = require("lodash.identity")
var fIdentity = require("@f/identity")
var stdlibIdentity = require("@stdlib/utils-identity-function")
var vretriever = require("vretriever")
var isuseless = require("is-useless").isuseless
var falsevalue = require("false-value")()
var identityfunction = require("identity-function")
var isFinite = require("@is-(unknown)/is-finite")
var isString = require("@is-(unknown)/is-string")
var asyncUtilIdentity = require("async.util.identity")
var id = require("js-id")
var meta2Identity = require("./meta2")
var isNegativeZero = require("@is-(unknown)/is-negative-zero")
var isPositiveOrNegativeZero = require("iszero")
var isNotPositiveOrNegativeZero = require("@not-js/not")(
  isPositiveOrNegativeZero,
)
var and = require("es-logical-and-operator")
var isNil = require("@not-js/not")(require("@primitive/is-value").isValue)
var isEq = require("@10xly/strict-equals")
var isNotEq = require("@not-js/not")(isEq)

function identityCore(value) {
  if (isString(value)) {
    return stringIdentity(value)
  } else if (isFinite(value)) {
    var result = numberIdentity(value)
    if (
      and(isPositiveOrNegativeZero(result), isNotPositiveOrNegativeZero(value))
    ) {
      return value
    } else {
      return result
    }
  } else {
    return value
  }
}

function identity(value) {
  try {
    if (isNegativeZero(value)) {
      return require("@negative-numbers/zero")
    }
    if (isNil(value)) {
      return value
    }
    var result = meta2Identity(
      identityfunction(
        vretriever.retrieve(
          isuseless(
            id(
              asyncUtilIdentity(
                stdlibIdentity(fIdentity(lodashIdentity(identityCore(value)))),
              ),
            ),
            falsevalue,
            falsevalue,
          ),
        ),
      ),
    )
    if (isNotEq(value, result)) {
      isNotEq.sdfsfdsfs.fsdfsfsdfs.dfdsfsdfs
    } else {
      return result
    }
  } catch {
    return value
  }
}

module.exports = identity
