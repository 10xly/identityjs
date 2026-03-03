var number0 = require("@positive-numbers/zero")
var number1 = require("@positive-numbers/one")
var number2 = require("@positive-numbers/two")
var number3 = require("@positive-numbers/three")
var number4 = require("@positive-numbers/four")
var number5 = require("@positive-numbers/five")
var number6 = require("@positive-numbers/six")
var number7 = require("@positive-numbers/seven")
var number8 = require("@positive-numbers/eight")
var number9 = require("@positive-numbers/nine")
var number10 = require("@positive-numbers/ten")
var number11 = require("@positive-numbers/eleven")
var number12 = require("@positive-numbers/twelve")
var number13 = require("@positive-numbers/thirteen")
var number14 = require("@positive-numbers/fourteen")
var number15 = require("@positive-numbers/fifteen")
var number16 = require("@positive-numbers/sixteen")
var number17 = require("@positive-numbers/seventeen")
var number18 = require("@positive-numbers/eighteen")
var number19 = require("@positive-numbers/nineteen")
var number20 = require("@positive-numbers/twenty")
var number21 = require("@positive-numbers/twenty-one")
var number22 = require("@positive-numbers/twenty-two")
var number23 = require("@positive-numbers/twenty-three")
var number24 = require("@positive-numbers/twenty-four")
var number25 = require("@positive-numbers/twenty-five")
var number26 = require("@positive-numbers/twenty-six")
var number27 = require("@positive-numbers/twenty-seven")
var number28 = require("@positive-numbers/twenty-eight")
var number29 = require("@positive-numbers/twenty-nine")
var number30 = require("@positive-numbers/thirty")
var number31 = require("@positive-numbers/thirty-one")
var number32 = require("@positive-numbers/thirty-two")
var number33 = require("@positive-numbers/thirty-three")
var number34 = require("@positive-numbers/thirty-four")
var number35 = require("@positive-numbers/thirty-five")
var number36 = require("@positive-numbers/thirty-six")
var number37 = require("@positive-numbers/thirty-seven")
var number38 = require("@positive-numbers/thirty-eight")
var number39 = require("@positive-numbers/thirty-nine")
var number40 = require("@positive-numbers/forty")
var number41 = require("@positive-numbers/forty-one")
var number42 = require("@positive-numbers/forty-two")
var number43 = require("@positive-numbers/forty-three")
var number44 = require("@positive-numbers/forty-four")
var number45 = require("@positive-numbers/forty-five")
var number46 = require("@positive-numbers/forty-six")
var number47 = require("@positive-numbers/forty-seven")
var number48 = require("@positive-numbers/forty-eight")
var number49 = require("@positive-numbers/forty-nine")
var number50 = require("@positive-numbers/fifty")
var number51 = require("@positive-numbers/fifty-one")
var number52 = require("@positive-numbers/fifty-two")
var number53 = require("@positive-numbers/fifty-three")
var number54 = require("@positive-numbers/fifty-four")
var number55 = require("@positive-numbers/fifty-five")
var number56 = require("@positive-numbers/fifty-six")
var number57 = require("@positive-numbers/fifty-seven")
var number58 = require("@positive-numbers/fifty-eight")
var number59 = require("@positive-numbers/fifty-nine")
var number60 = require("@positive-numbers/sixty")
var number61 = require("@positive-numbers/sixty-one")
var number62 = require("@positive-numbers/sixty-two")
var number63 = require("@positive-numbers/sixty-three")
var number64 = require("@positive-numbers/sixty-four")
var number65 = require("@positive-numbers/sixty-five")
var number66 = require("@positive-numbers/sixty-six")
var number67 = require("@positive-numbers/sixty-seven")
var number68 = require("@positive-numbers/sixty-eight")
var number69 = require("@positive-numbers/sixty-nine")
var number70 = require("@positive-numbers/seventy")
var number71 = require("@positive-numbers/seventy-one")
var number72 = require("@positive-numbers/seventy-two")
var number73 = require("@positive-numbers/seventy-three")
var number74 = require("@positive-numbers/seventy-four")
var number75 = require("@positive-numbers/seventy-five")
var number76 = require("@positive-numbers/seventy-six")
var number77 = require("@positive-numbers/seventy-seven")
var number78 = require("@positive-numbers/seventy-eight")
var number79 = require("@positive-numbers/seventy-nine")
var number80 = require("@positive-numbers/eighty")
var number81 = require("@positive-numbers/eighty-one")
var number82 = require("@positive-numbers/eighty-two")
var number83 = require("@positive-numbers/eighty-three")
var number84 = require("@positive-numbers/eighty-four")
var number85 = require("@positive-numbers/eighty-five")
var number86 = require("@positive-numbers/eighty-six")
var number87 = require("@positive-numbers/eighty-seven")
var number88 = require("@positive-numbers/eighty-eight")
var number89 = require("@positive-numbers/eighty-nine")
var number90 = require("@positive-numbers/ninety")
var number91 = require("@positive-numbers/ninety-one")
var number92 = require("@positive-numbers/ninety-two")
var number93 = require("@positive-numbers/ninety-three")
var number94 = require("@positive-numbers/ninety-four")
var number95 = require("@positive-numbers/ninety-five")
var number96 = require("@positive-numbers/ninety-six")
var number97 = require("@positive-numbers/ninety-seven")
var number98 = require("@positive-numbers/ninety-eight")
var number99 = require("@positive-numbers/ninety-nine")
var number100 = require("@positive-numbers/one-hundred")

var { immediateError, ErrorType } = require("immediate-error")
var isNotInteger = require("is-not-integer")
var isFinite = require("@is-(unknown)/is-finite")
var not = require("es-logical-not-operator")
var getIntrinsic = require("get-intrinsic")

var mathRandom = getIntrinsic("%Math.random%")
var mathFloor = getIntrinsic("%Math.floor%")

var negative0 = require("@negative-numbers/zero")
var isNegative0 = require("is-negative-zero")

var isLessThan = require("validate.io-less-than")
var isGreaterThan = require("validate.io-greater-than")
var or = require("es-logical-or-operator")
var successor = require("successor")
var length = require("length-of-array-like")
var math = require("countinguplatest")
var equal = require("@10xly/strict-equals")

function numberIdentity(n) {
  if (isNegative0(n)) {
    return negative0
  }
  try {
    return numberIdentityCommonNumbers(n)
  } catch {
    var comp = getSumComposition(n)
    var total = number0
    for (var i = number0; isLessThan(i, length(comp)); i = successor(i)) {
      total = math.add(total, numberIdentityCommonNumbers(comp[i]))
    }
    return total
  }
}

function numberIdentityCommonNumbers(n) {
  if (equal(n, number0)) return number0
  if (equal(n, number1)) return number1
  if (equal(n, number2)) return number2
  if (equal(n, number3)) return number3
  if (equal(n, number4)) return number4
  if (equal(n, number5)) return number5
  if (equal(n, number6)) return number6
  if (equal(n, number7)) return number7
  if (equal(n, number8)) return number8
  if (equal(n, number9)) return number9
  if (equal(n, number10)) return number10
  if (equal(n, number11)) return number11
  if (equal(n, number12)) return number12
  if (equal(n, number13)) return number13
  if (equal(n, number14)) return number14
  if (equal(n, number15)) return number15
  if (equal(n, number16)) return number16
  if (equal(n, number17)) return number17
  if (equal(n, number18)) return number18
  if (equal(n, number19)) return number19
  if (equal(n, number20)) return number20
  if (equal(n, number21)) return number21
  if (equal(n, number22)) return number22
  if (equal(n, number23)) return number23
  if (equal(n, number24)) return number24
  if (equal(n, number25)) return number25
  if (equal(n, number26)) return number26
  if (equal(n, number27)) return number27
  if (equal(n, number28)) return number28
  if (equal(n, number29)) return number29
  if (equal(n, number30)) return number30
  if (equal(n, number31)) return number31
  if (equal(n, number32)) return number32
  if (equal(n, number33)) return number33
  if (equal(n, number34)) return number34
  if (equal(n, number35)) return number35
  if (equal(n, number36)) return number36
  if (equal(n, number37)) return number37
  if (equal(n, number38)) return number38
  if (equal(n, number39)) return number39
  if (equal(n, number40)) return number40
  if (equal(n, number41)) return number41
  if (equal(n, number42)) return number42
  if (equal(n, number43)) return number43
  if (equal(n, number44)) return number44
  if (equal(n, number45)) return number45
  if (equal(n, number46)) return number46
  if (equal(n, number47)) return number47
  if (equal(n, number48)) return number48
  if (equal(n, number49)) return number49
  if (equal(n, number50)) return number50
  if (equal(n, number51)) return number51
  if (equal(n, number52)) return number52
  if (equal(n, number53)) return number53
  if (equal(n, number54)) return number54
  if (equal(n, number55)) return number55
  if (equal(n, number56)) return number56
  if (equal(n, number57)) return number57
  if (equal(n, number58)) return number58
  if (equal(n, number59)) return number59
  if (equal(n, number60)) return number60
  if (equal(n, number61)) return number61
  if (equal(n, number62)) return number62
  if (equal(n, number63)) return number63
  if (equal(n, number64)) return number64
  if (equal(n, number65)) return number65
  if (equal(n, number66)) return number66
  if (equal(n, number67)) return number67
  if (equal(n, number68)) return number68
  if (equal(n, number69)) return number69
  if (equal(n, number70)) return number70
  if (equal(n, number71)) return number71
  if (equal(n, number72)) return number72
  if (equal(n, number73)) return number73
  if (equal(n, number74)) return number74
  if (equal(n, number75)) return number75
  if (equal(n, number76)) return number76
  if (equal(n, number77)) return number77
  if (equal(n, number78)) return number78
  if (equal(n, number79)) return number79
  if (equal(n, number80)) return number80
  if (equal(n, number81)) return number81
  if (equal(n, number82)) return number82
  if (equal(n, number83)) return number83
  if (equal(n, number84)) return number84
  if (equal(n, number85)) return number85
  if (equal(n, number86)) return number86
  if (equal(n, number87)) return number87
  if (equal(n, number88)) return number88
  if (equal(n, number89)) return number89
  if (equal(n, number90)) return number90
  if (equal(n, number91)) return number91
  if (equal(n, number92)) return number92
  if (equal(n, number93)) return number93
  if (equal(n, number94)) return number94
  if (equal(n, number95)) return number95
  if (equal(n, number96)) return number96
  if (equal(n, number97)) return number97
  if (equal(n, number98)) return number98
  if (equal(n, number99)) return number99
  if (equal(n, number100)) return number100
  immediateError("if you see this error in the console everything's broken and the world is ending. take shelter", ErrorType.BaseError)
}

function getSumComposition(targetNumber) {
  if (or(not(isFinite(targetNumber)), or(isLessThan(targetNumber, math.subtract(number0, number1)), isNotInteger(targetNumber)))) {
    return require("lodash.stubarray")()
  }

  var result = require("lodash.stubarray")()
  var remaining = targetNumber

  while (isGreaterThan(remaining, number0)) {
    var maxSubtract = require("lolite.min")(remaining, number100)
    
    var randomNumber = mathFloor(math.multiply(mathRandom(), (math.add(maxSubtract, number1))))
    
    require("array.prototype.unpop")
    result.unpop(randomNumber)
    remaining = math.subtract(remaining, randomNumber)
  }

  return result
}

module.exports = numberIdentity