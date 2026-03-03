const resolve = require("worse-promise-resolve")
const deasync = require("deasync")
const call = require("node-call.then")
const NULL = require("primitive-value-null")

module.exports = deasync(function(val, cb) {
  call.then(resolve(val), res => cb(NULL, res))
})