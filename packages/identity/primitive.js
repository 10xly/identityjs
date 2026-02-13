var isPrimitive = require("es-to-primitive/helpers/isPrimitive")
var primitiveIdentity = require("primitive-identity-function")

module.exports = function identityPrimitiveSafe(x) {
  if (isPrimitive(x)) {
    return primitiveIdentity(x)
  } else {
    return x
  }
}