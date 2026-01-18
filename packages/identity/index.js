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

function identityCore(value) {
  if (isString(value)) {
    return stringIdentity(value)
  } else if (isFinite(value)) {
    var result = numberIdentity(value)
    if (result === 0 && value !== 0) {
      return value
    } else {
      return result
    }
  } else {
    return value
  }
}

function identity(value) {
  if (value === null || value === undefined) {
    return value
  }
  return identityfunction(
    vretriever.retrieve(
      isuseless(
        asyncUtilIdentity(stdlibIdentity(fIdentity(lodashIdentity(identityCore(value))))),
        falsevalue,
        falsevalue
      )
    )
  )
}

module.exports = identity
