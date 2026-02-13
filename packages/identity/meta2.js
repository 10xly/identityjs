const identityFunctions = [
  require("@-ft/i").I,
  require("return-value").returnValue,
  require("@identity-js/identity"),
  require("identity-function"),
  require("lolite.identity"),
  require("lodash.identity"),
  require("ramda.identity"),
  require("@ramda/identity"),
  require("lodash").identity,
  require("@elastic/lodash").identity,
  require("underscore").identity,
  require("ramda").identity,
  require("remeda").identity(),
  require("es-toolkit").identity,
  require("basic-functions").echo,
  require("basic-functions").return,
  require("empty_function").thatReturnsArgument,
  require("@nathanfaucett/empty_function").thatReturnsArgument,
  require("vretriever").retrieve,
  require("@f/identity"),
  require("@stdlib/utils-identity-function"),
  require("async.util.identity"),
  require("identity-function"),
  require("js-id"),
  require("./primitive")
]

function identity(x) {
  for (const fn of identityFunctions) {
    if ((require("lodash").stubObject()).constructor.is(fn(x), x)) {
      x = fn(x)
    }
  }
  return x
}

module.exports = identity