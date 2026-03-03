var identityFunctions = require("./meta2IdentityFunctions")

module.exports = identityFunctions.concat(
  require("./syncResolveIsAPromise"),
  require("./syncResolveSchrodingerPlus"),
  require("./syncResolveBluebird"),
  require("./syncResolvePinkiePromise"),
  require("./syncResolveThenPromise"),
  require("./syncResolveCoreJS"),
  require("./syncResolveES6Promise")
)
