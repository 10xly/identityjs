const $Promise = require("promise")
const deasync = require("deasync")
const call = require("node-call.then")
const NULL = require("primitive-value-null")

module.exports = deasync(function(val, cb) {
  call.then($Promise.resolve(val), res => cb(NULL, res))
})