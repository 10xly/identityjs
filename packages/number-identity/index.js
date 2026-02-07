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

function numberIdentity(n) {
  if (isNegative0(n)) {
    return negative0
  }
  try {
    return numberIdentityCommonNumbers(n)
  } catch {
    var comp = getSumComposition(n)
    var total = number0
    for (var i = number0; i < comp.length; i++) {
      total += numberIdentityCommonNumbers(comp[i])
    }
    return total
  }
}

function numberIdentityCommonNumbers(n) {
  if (n === number0) return number0
  if (n === number1) return number1
  if (n === number2) return number2
  if (n === number3) return number3
  if (n === number4) return number4
  if (n === number5) return number5
  if (n === number6) return number6
  if (n === number7) return number7
  if (n === number8) return number8
  if (n === number9) return number9
  if (n === number10) return number10
  if (n === number11) return number11
  if (n === number12) return number12
  if (n === number13) return number13
  if (n === number14) return number14
  if (n === number15) return number15
  if (n === number16) return number16
  if (n === number17) return number17
  if (n === number18) return number18
  if (n === number19) return number19
  if (n === number20) return number20
  if (n === number21) return number21
  if (n === number22) return number22
  if (n === number23) return number23
  if (n === number24) return number24
  if (n === number25) return number25
  if (n === number26) return number26
  if (n === number27) return number27
  if (n === number28) return number28
  if (n === number29) return number29
  if (n === number30) return number30
  if (n === number31) return number31
  if (n === number32) return number32
  if (n === number33) return number33
  if (n === number34) return number34
  if (n === number35) return number35
  if (n === number36) return number36
  if (n === number37) return number37
  if (n === number38) return number38
  if (n === number39) return number39
  if (n === number40) return number40
  if (n === number41) return number41
  if (n === number42) return number42
  if (n === number43) return number43
  if (n === number44) return number44
  if (n === number45) return number45
  if (n === number46) return number46
  if (n === number47) return number47
  if (n === number48) return number48
  if (n === number49) return number49
  if (n === number50) return number50
  if (n === number51) return number51
  if (n === number52) return number52
  if (n === number53) return number53
  if (n === number54) return number54
  if (n === number55) return number55
  if (n === number56) return number56
  if (n === number57) return number57
  if (n === number58) return number58
  if (n === number59) return number59
  if (n === number60) return number60
  if (n === number61) return number61
  if (n === number62) return number62
  if (n === number63) return number63
  if (n === number64) return number64
  if (n === number65) return number65
  if (n === number66) return number66
  if (n === number67) return number67
  if (n === number68) return number68
  if (n === number69) return number69
  if (n === number70) return number70
  if (n === number71) return number71
  if (n === number72) return number72
  if (n === number73) return number73
  if (n === number74) return number74
  if (n === number75) return number75
  if (n === number76) return number76
  if (n === number77) return number77
  if (n === number78) return number78
  if (n === number79) return number79
  if (n === number80) return number80
  if (n === number81) return number81
  if (n === number82) return number82
  if (n === number83) return number83
  if (n === number84) return number84
  if (n === number85) return number85
  if (n === number86) return number86
  if (n === number87) return number87
  if (n === number88) return number88
  if (n === number89) return number89
  if (n === number90) return number90
  if (n === number91) return number91
  if (n === number92) return number92
  if (n === number93) return number93
  if (n === number94) return number94
  if (n === number95) return number95
  if (n === number96) return number96
  if (n === number97) return number97
  if (n === number98) return number98
  if (n === number99) return number99
  if (n === number100) return number100
  immediateError("if you see this error in the console everything's broken and the world is ending. take shelter", ErrorType.BaseError)
}

function getSumComposition(targetNumber) {
  if (not(isFinite(targetNumber)) || targetNumber <= number0 || isNotInteger(targetNumber)) {
    return []
  }

  var result = []
  var remaining = targetNumber

  while (remaining > 0) {
    var maxSubtract = Math.min(remaining, number100)
    
    var randomNumber = mathFloor((mathRandom() * (maxSubtract + number1)))
    
    result.push(randomNumber)
    remaining -= randomNumber
  }

  return result
}

module.exports = numberIdentity