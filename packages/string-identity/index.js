// UTILS
var generalConcat = require("general-concat")
var splitString = require("string.prototype.split")
var eqstrings = require("eq-strings")
var isWDS = require("@overkill/is-wds").isWDS
var { immediateError, ErrorType } = require("immediate-error")
var getIntrinsic = require("get-intrinsic")
var $String = getIntrinsic("%String%")
var fromCharCode = getIntrinsic("%String.fromCharCode%")
var isString = require("is-string")

// LOWERCASE LETTERS
var lowercase_a = require("@lowercase-letters/a") // "a"
var lowercase_b = require("@lowercase-letters/b") // "b"
var lowercase_c = require("@lowercase-letters/c") // "c"
var lowercase_d = require("@lowercase-letters/d") // "d"
var lowercase_e = require("@lowercase-letters/e") // "e"
var lowercase_f = require("@lowercase-letters/f") // "f"
var lowercase_g = require("@lowercase-letters/g") // "g"
var lowercase_h = require("@lowercase-letters/h") // "h"
var lowercase_i = require("@lowercase-letters/i") // "i"
var lowercase_j = require("@lowercase-letters/j") // "j"
var lowercase_k = require("@lowercase-letters/k") // "k"
var lowercase_l = require("@lowercase-letters/l") // "l"
var lowercase_m = require("@lowercase-letters/m") // "m"
var lowercase_n = require("@lowercase-letters/n") // "n"
var lowercase_o = require("@lowercase-letters/o") // "o"
var lowercase_p = require("@lowercase-letters/p") // "p"
var lowercase_q = require("@lowercase-letters/q") // "q"
var lowercase_r = require("@lowercase-letters/r") // "r"
var lowercase_s = require("@lowercase-letters/s") // "s"
var lowercase_t = require("@lowercase-letters/t") // "t"
var lowercase_u = require("@lowercase-letters/u") // "u"
var lowercase_v = require("@lowercase-letters/v") // "v"
var lowercase_w = require("@lowercase-letters/w") // "w"
var lowercase_x = require("@lowercase-letters/x") // "x"
var lowercase_y = require("@lowercase-letters/y") // "y"
var lowercase_z = require("@lowercase-letters/z") // "z"

// UPPERCASE LETTERS
var uppercase_a = require("@uppercase-letters/a") // "A"
var uppercase_b = require("@uppercase-letters/b") // "B"
var uppercase_c = require("@uppercase-letters/c") // "C"
var uppercase_d = require("@uppercase-letters/d") // "D"
var uppercase_e = require("@uppercase-letters/e") // "E"
var uppercase_f = require("@uppercase-letters/f") // "F"
var uppercase_g = require("@uppercase-letters/g") // "G"
var uppercase_h = require("@uppercase-letters/h") // "H"
var uppercase_i = require("@uppercase-letters/i") // "I"
var uppercase_j = require("@uppercase-letters/j") // "J"
var uppercase_k = require("@uppercase-letters/k") // "K"
var uppercase_l = require("@uppercase-letters/l") // "L"
var uppercase_m = require("@uppercase-letters/m") // "M"
var uppercase_n = require("@uppercase-letters/n") // "N"
var uppercase_o = require("@uppercase-letters/o") // "O"
var uppercase_p = require("@uppercase-letters/p") // "P"
var uppercase_q = require("@uppercase-letters/q") // "Q"
var uppercase_r = require("@uppercase-letters/r") // "R"
var uppercase_s = require("@uppercase-letters/s") // "S"
var uppercase_t = require("@uppercase-letters/t") // "T"
var uppercase_u = require("@uppercase-letters/u") // "U"
var uppercase_v = require("@uppercase-letters/v") // "V"
var uppercase_w = require("@uppercase-letters/w") // "W"
var uppercase_x = require("@uppercase-letters/x") // "X"
var uppercase_y = require("@uppercase-letters/y") // "Y"
var uppercase_z = require("@uppercase-letters/z") // "Z"

// ALPHABET
var lowercase_alphabet = generalConcat(
	lowercase_a,
	lowercase_b,
	lowercase_c,
	lowercase_d,
	lowercase_e,
	lowercase_f,
	lowercase_g,
	lowercase_h,
	lowercase_i,
	lowercase_j,
	lowercase_k,
	lowercase_l,
	lowercase_m,
	lowercase_n,
	lowercase_o,
	lowercase_p,
	lowercase_q,
	lowercase_r,
	lowercase_s,
	lowercase_t,
	lowercase_u,
	lowercase_v,
	lowercase_w,
	lowercase_x,
	lowercase_y,
	lowercase_z
)
var uppercase_alphabet = generalConcat(
	uppercase_a,
	uppercase_b,
	uppercase_c,
	uppercase_d,
	uppercase_e,
	uppercase_f,
	uppercase_g,
	uppercase_h,
	uppercase_i,
	uppercase_j,
	uppercase_k,
	uppercase_l,
	uppercase_m,
	uppercase_n,
	uppercase_o,
	uppercase_p,
	uppercase_q,
	uppercase_r,
	uppercase_s,
	uppercase_t,
	uppercase_u,
	uppercase_v,
	uppercase_w,
	uppercase_x,
	uppercase_y,
	uppercase_z
)

// OTHER RANDOM STRINGS
var fizz = require("string-fizz") // "fizz"
var buzz = require("string-buzz") // "buzz"
var fizzbuzz = require("string-fizzbuzz") // "fizzbuzz"
var creashaks = require("string-creashaks") // "creashaks"
var organzine = require("string-organzine") // "organzine"
var creashaksOrganzine = require("string-creashaks-organzine") // "creashaks organzine"
var emptyString = require("empty-string") // ""
var space = require("space-string") // " "

// EMOJIS
var emojis = {
	"emoji-100": require("emoji-100"), // "💯"
	"emoji-1234": require("emoji-1234"), // "🔢"
	"emoji-abcd": require("emoji-abcd"), // "🔡"
	"emoji-airplane-departure": require("emoji-airplane-departure"), // "🛫"
	"emoji-alembic": require("emoji-alembic"), // "⚗"
	"emoji-ant": require("emoji-ant"), // "🐜"
	"emoji-apple": require("emoji-apple"), // "🍎"
	"emoji-articulated-lorry": require("emoji-articulated-lorry"), // "🚛"
	"emoji-bar-chart": require("emoji-bar-chart"), // "📊"
	"emoji-basketball": require("emoji-basketball"), // "🏀"
	"emoji-bath": require("emoji-bath"), // "🛀"
	"emoji-blue-book": require("emoji-blue-book"), // "📘"
	"emoji-bookmark-tabs": require("emoji-bookmark-tabs"), // "📑"
	"emoji-bread": require("emoji-bread"), // "🍞"
	"emoji-bulb": require("emoji-bulb"), // "💡"
	"emoji-camping": require("emoji-camping"), // "🏕"
	"emoji-candle": require("emoji-candle"), // "🕯"
	"emoji-car": require("emoji-car"), // "🚗"
	"emoji-card-index-dividers": require("emoji-card-index-dividers"), // "🗂"
	"emoji-cat": require("emoji-cat"), // "🐱"
	"emoji-cd": require("emoji-cd"), // "💿"
	"emoji-champagne": require("emoji-champagne"), // "🍾"
	"emoji-checkered-flag": require("emoji-checkered-flag"), // "🏁"
	"emoji-cherry-blossom": require("emoji-cherry-blossom"), // "🌸"
	"emoji-city-sunrise": require("emoji-city-sunrise"), // "🌇"
	"emoji-cityscape": require("emoji-cityscape"), // "🏙"
	"emoji-clapper": require("emoji-clapper"), // "🎬"
	"emoji-clock1": require("emoji-clock1"), // "🕐"
	"emoji-clock10": require("emoji-clock10"), // "🕙"
	"emoji-clock12": require("emoji-clock12"), // "🕛"
	"emoji-clock3": require("emoji-clock3"), // "🕒"
	"emoji-clock330": require("emoji-clock330"), // "🕞"
	"emoji-clock530": require("emoji-clock530"), // "🕠"
	"emoji-clock6": require("emoji-clock6"), // "🕕"
	"emoji-clock630": require("emoji-clock630"), // "🕡"
	"emoji-clock830": require("emoji-clock830"), // "🕣"
	"emoji-clock9": require("emoji-clock9"), // "🕘"
	"emoji-cocktail": require("emoji-cocktail"), // "🍸"
	"emoji-coffee": require("emoji-coffee"), // "☕️"
	"emoji-comet": require("emoji-comet"), // "☄"
	"emoji-compression": require("emoji-compression"), // "🗜"
	"emoji-computer": require("emoji-computer"), // "💻"
	"emoji-construction": require("emoji-construction"), // "🚧"
	"emoji-control-knobs": require("emoji-control-knobs"), // "🎛"
	"emoji-cop": require("emoji-cop"), // "👮"
	"emoji-copyright": require("emoji-copyright"), // "©️"
	"emoji-crab": require("emoji-crab"), // "🦀"
	"emoji-crescent-moon": require("emoji-crescent-moon"), // "🌙"
	"emoji-crossed-flags": require("emoji-crossed-flags"), // "🎌"
	"emoji-cry": require("emoji-cry"), // "😢"
	"emoji-crystal-ball": require("emoji-crystal-ball"), // "🔮"
	"emoji-currency-exchange": require("emoji-currency-exchange"), // "💱"
	"emoji-dark-sunglasses": require("emoji-dark-sunglasses"), // "🕶"
	"emoji-dart": require("emoji-dart"), // "🎯"
	"emoji-de": require("emoji-de"), // "🇩🇪"
	"emoji-department-store": require("emoji-department-store"), // "🏬"
	"emoji-door": require("emoji-door"), // "🚪"
	"emoji-doughnut": require("emoji-doughnut"), // "🍩"
	"emoji-egg": require("emoji-egg"), // "🍳"
	"emoji-eight-pointed-black-star": require("emoji-eight-pointed-black-star"), // "✴️"
	"emoji-eight-spoked-asterisk": require("emoji-eight-spoked-asterisk"), // "✳️"
	"emoji-envelope-with-arrow": require("emoji-envelope-with-arrow"), // "📩"
	"emoji-es": require("emoji-es"), // "🇪🇸"
	"emoji-euro": require("emoji-euro"), // "💶"
	"emoji-eyeglasses": require("emoji-eyeglasses"), // "👓"
	"emoji-eyes": require("emoji-eyes"), // "👀"
	"emoji-family": require("emoji-family"), // "👨‍👩‍👦"
	"emoji-film-projector": require("emoji-film-projector"), // "📽"
	"emoji-fire": require("emoji-fire"), // "🔥"
	"emoji-fire-engine": require("emoji-fire-engine"), // "🚒"
	"emoji-fireworks": require("emoji-fireworks"), // "🎆"
	"emoji-fish": require("emoji-fish"), // "🐟"
	"emoji-flag-ag": require("emoji-flag-ag"), // "🇦🇬"
	"emoji-flag-am": require("emoji-flag-am"), // "🇦🇲"
	"emoji-flag-ax": require("emoji-flag-ax"), // "🇦🇽"
	"emoji-flag-bz": require("emoji-flag-bz"), // "🇧🇿"
	"emoji-flag-cm": require("emoji-flag-cm"), // "🇨🇲"
	"emoji-flag-cx": require("emoji-flag-cx"), // "🇨🇽"
	"emoji-flag-ee": require("emoji-flag-ee"), // "🇪🇪"
	"emoji-flag-es": require("emoji-flag-es"), // "🇪🇸"
	"emoji-flag-ga": require("emoji-flag-ga"), // "🇬🇦"
	"emoji-flag-gu": require("emoji-flag-gu"), // "🇬🇺"
	"emoji-flag-je": require("emoji-flag-je"), // "🇯🇪"
	"emoji-flag-kh": require("emoji-flag-kh"), // "🇰🇭"
	"emoji-flag-kn": require("emoji-flag-kn"), // "🇰🇳"
	"emoji-flag-na": require("emoji-flag-na"), // "🇳🇦"
	"emoji-flag-nu": require("emoji-flag-nu"), // "🇳🇺"
	"emoji-flag-pf": require("emoji-flag-pf"), // "🇵🇫"
	"emoji-flag-pr": require("emoji-flag-pr"), // "🇵🇷"
	"emoji-flag-pt": require("emoji-flag-pt"), // "🇵🇹"
	"emoji-flag-sh": require("emoji-flag-sh"), // "🇸🇭"
	"emoji-flag-so": require("emoji-flag-so"), // "🇸🇴"
	"emoji-flag-ss": require("emoji-flag-ss"), // "🇸🇸"
	"emoji-flag-vu": require("emoji-flag-vu"), // "🇻🇺"
	"emoji-flag-wf": require("emoji-flag-wf"), // "🇼🇫"
	"emoji-flag-ws": require("emoji-flag-ws"), // "🇼🇸"
	"emoji-fleur-de-lis": require("emoji-fleur-de-lis"), // "⚜"
	"emoji-foggy": require("emoji-foggy"), // "🌁"
	"emoji-footprints": require("emoji-footprints"), // "👣"
	"emoji-full-moon": require("emoji-full-moon"), // "🌕"
	"emoji-funeral-urn": require("emoji-funeral-urn"), // "⚱"
	"emoji-goat": require("emoji-goat"), // "🐐"
	"emoji-golf": require("emoji-golf"), // "⛳️"
	"emoji-green-apple": require("emoji-green-apple"), // "🍏"
	"emoji-gun": require("emoji-gun"), // "🔫"
	"emoji-haircut": require("emoji-haircut"), // "💇"
	"emoji-hamster": require("emoji-hamster"), // "🐹"
	"emoji-hash": require("emoji-hash"), // "#️⃣"
	"emoji-headphones": require("emoji-headphones"), // "🎧"
	"emoji-heartbeat": require("emoji-heartbeat"), // "💓"
	"emoji-hearts": require("emoji-hearts"), // "♥️"
	"emoji-heavy-check-mark": require("emoji-heavy-check-mark"), // "✔️"
	"emoji-helicopter": require("emoji-helicopter"), // "🚁"
	"emoji-herb": require("emoji-herb"), // "🌿"
	"emoji-hocho": require("emoji-hocho"), // "🔪"
	"emoji-hotdog": require("emoji-hotdog"), // "🌭"
	"emoji-hotel": require("emoji-hotel"), // "🏨"
	"emoji-hotsprings": require("emoji-hotsprings"), // "♨️"
	"emoji-house": require("emoji-house"), // "🏠"
	"emoji-inbox-tray": require("emoji-inbox-tray"), // "📥"
	"emoji-information-source": require("emoji-information-source"), // "ℹ️"
	"emoji-innocent": require("emoji-innocent"), // "😇"
	"emoji-izakaya-lantern": require("emoji-izakaya-lantern"), // "🏮"
	"emoji-japan": require("emoji-japan"), // "🗾"
	"emoji-japanese-castle": require("emoji-japanese-castle"), // "🏯"
	"emoji-joy": require("emoji-joy"), // "😂"
	"emoji-keyboard": require("emoji-keyboard"), // "⌨"
	"emoji-keycap-star": require("emoji-keycap-star"), // "*⃣"
	"emoji-kissing": require("emoji-kissing"), // "😗"
	"emoji-kissing-heart": require("emoji-kissing-heart"), // "😘"
	"emoji-knife-fork-plate": require("emoji-knife-fork-plate"), // "🍽"
	"emoji-koko": require("emoji-koko"), // "🈁"
	"emoji-lantern": require("emoji-lantern"), // "🏮"
	"emoji-laughing": require("emoji-laughing"), // "😆"
	"emoji-leaves": require("emoji-leaves"), // "🍃"
	"emoji-left-luggage": require("emoji-left-luggage"), // "🛅"
	"emoji-libra": require("emoji-libra"), // "♎️"
	"emoji-lightning": require("emoji-lightning"), // "🌩"
	"emoji-lollipop": require("emoji-lollipop"), // "🍭"
	"emoji-love-letter": require("emoji-love-letter"), // "💌"
	"emoji-lower-left-ballpoint-pen": require("emoji-lower-left-ballpoint-pen"), // "🖊"
	"emoji-mag": require("emoji-mag"), // "🔍"
	"emoji-mahjong": require("emoji-mahjong"), // "🀄️"
	"emoji-man-and-woman-holding-hands": require("emoji-man-and-woman-holding-hands"), // "👫"
	"emoji-man-kiss-man": require("emoji-man-kiss-man"), // "👨‍❤️‍💋‍👨"
	"emoji-man-man-boy-boy": require("emoji-man-man-boy-boy"), // "👨‍👨‍👦‍👦"
	"emoji-man-with-turban": require("emoji-man-with-turban"), // "👳"
	"emoji-man-woman-boy": require("emoji-man-woman-boy"), // "👨‍👩‍👦"
	"emoji-man-woman-girl": require("emoji-man-woman-girl"), // "👨‍👩‍👧"
	"emoji-man-woman-girl-boy": require("emoji-man-woman-girl-boy"), // "👨‍👩‍👧‍👦"
	"emoji-mantelpiece-clock": require("emoji-mantelpiece-clock"), // "🕰"
	"emoji-microphone": require("emoji-microphone"), // "🎤"
	"emoji-middle-finger": require("emoji-middle-finger"), // "🖕"
	"emoji-milky-way": require("emoji-milky-way"), // "🌌"
	"emoji-money-mouth-face": require("emoji-money-mouth-face"), // "🤑"
	"emoji-monkey-face": require("emoji-monkey-face"), // "🐵"
	"emoji-mostly-sunny": require("emoji-mostly-sunny"), // "🌤"
	"emoji-mount-fuji": require("emoji-mount-fuji"), // "🗻"
	"emoji-mountain": require("emoji-mountain"), // "⛰"
	"emoji-mouse2": require("emoji-mouse2"), // "🐁"
	"emoji-mushroom": require("emoji-mushroom"), // "🍄"
	"emoji-name-badge": require("emoji-name-badge"), // "📛"
	"emoji-non-potable-water": require("emoji-non-potable-water"), // "🚱"
	"emoji-nose": require("emoji-nose"), // "👃"
	"emoji-o2": require("emoji-o2"), // "🅾️"
	"emoji-om-symbol": require("emoji-om-symbol"), // "🕉"
	"emoji-on": require("emoji-on"), // "🔛"
	"emoji-oncoming-taxi": require("emoji-oncoming-taxi"), // "🚖"
	"emoji-one": require("emoji-one"), // "1️⃣"
	"emoji-outbox-tray": require("emoji-outbox-tray"), // "📤"
	"emoji-package": require("emoji-package"), // "📦"
	"emoji-palm-tree": require("emoji-palm-tree"), // "🌴"
	"emoji-paperclip": require("emoji-paperclip"), // "📎"
	"emoji-parking": require("emoji-parking"), // "🅿️"
	"emoji-part-alternation-mark": require("emoji-part-alternation-mark"), // "〽️"
	"emoji-passport-control": require("emoji-passport-control"), // "🛂"
	"emoji-phone": require("emoji-phone"), // "☎️"
	"emoji-pig": require("emoji-pig"), // "🐷"
	"emoji-pig-nose": require("emoji-pig-nose"), // "🐽"
	"emoji-pig2": require("emoji-pig2"), // "🐖"
	"emoji-pill": require("emoji-pill"), // "💊"
	"emoji-police-car": require("emoji-police-car"), // "🚓"
	"emoji-poodle": require("emoji-poodle"), // "🐩"
	"emoji-poop": require("emoji-poop"), // "💩"
	"emoji-postal-horn": require("emoji-postal-horn"), // "📯"
	"emoji-postbox": require("emoji-postbox"), // "📮"
	"emoji-purse": require("emoji-purse"), // "👛"
	"emoji-rainbow": require("emoji-rainbow"), // "🌈"
	"emoji-raised-hand": require("emoji-raised-hand"), // "✋"
	"emoji-repeat": require("emoji-repeat"), // "🔁"
	"emoji-repeat-one": require("emoji-repeat-one"), // "🔂"
	"emoji-rice": require("emoji-rice"), // "🍚"
	"emoji-ring": require("emoji-ring"), // "💍"
	"emoji-rooster": require("emoji-rooster"), // "🐓"
	"emoji-rose": require("emoji-rose"), // "🌹"
	"emoji-rotating-light": require("emoji-rotating-light"), // "🚨"
	"emoji-running": require("emoji-running"), // "🏃"
	"emoji-satellite": require("emoji-satellite"), // "🛰"
	"emoji-saxophone": require("emoji-saxophone"), // "🎷"
	"emoji-scorpion": require("emoji-scorpion"), // "🦂"
	"emoji-scream": require("emoji-scream"), // "😱"
	"emoji-secret": require("emoji-secret"), // "㊙️"
	"emoji-shower": require("emoji-shower"), // "🚿"
	"emoji-signal-strength": require("emoji-signal-strength"), // "📶"
	"emoji-six": require("emoji-six"), // "6️⃣"
	"emoji-ski": require("emoji-ski"), // "🎿"
	"emoji-small-red-triangle": require("emoji-small-red-triangle"), // "🔺"
	"emoji-smile": require("emoji-smile"), // "😄"
	"emoji-smile-cat": require("emoji-smile-cat"), // "😸"
	"emoji-smirk-cat": require("emoji-smirk-cat"), // "😼"
	"emoji-space-invader": require("emoji-space-invader"), // "👾"
	"emoji-sparkle": require("emoji-sparkle"), // "❇️"
	"emoji-sparkler": require("emoji-sparkler"), // "🎇"
	"emoji-star-and-crescent": require("emoji-star-and-crescent"), // "☪"
	"emoji-star-of-david": require("emoji-star-of-david"), // "✡"
	"emoji-steam-locomotive": require("emoji-steam-locomotive"), // "🚂"
	"emoji-strawberry": require("emoji-strawberry"), // "🍓"
	"emoji-sunflower": require("emoji-sunflower"), // "🌻"
	"emoji-sunglasses": require("emoji-sunglasses"), // "😎"
	"emoji-sushi": require("emoji-sushi"), // "🍣"
	"emoji-sweat": require("emoji-sweat"), // "😓"
	"emoji-sweat-smile": require("emoji-sweat-smile"), // "😅"
	"emoji-synagogue": require("emoji-synagogue"), // "🕍"
	"emoji-taxi": require("emoji-taxi"), // "🚕"
	"emoji-tea": require("emoji-tea"), // "🍵"
	"emoji-thinking-face": require("emoji-thinking-face"), // "🤔"
	"emoji-three-button-mouse": require("emoji-three-button-mouse"), // "🖱"
	"emoji-tm": require("emoji-tm"), // "™️"
	"emoji-top": require("emoji-top"), // "🔝"
	"emoji-trackball": require("emoji-trackball"), // "🖲"
	"emoji-trolleybus": require("emoji-trolleybus"), // "🚎"
	"emoji-tulip": require("emoji-tulip"), // "🌷"
	"emoji-two": require("emoji-two"), // "2️⃣"
	"emoji-two-men-holding-hands": require("emoji-two-men-holding-hands"), // "👬"
	"emoji-u6709": require("emoji-u6709"), // "🈶"
	"emoji-u7533": require("emoji-u7533"), // "🈸"
	"emoji-umbrella-on-ground": require("emoji-umbrella-on-ground"), // "⛱"
	"emoji-us": require("emoji-us"), // "🇺🇸"
	"emoji-vhs": require("emoji-vhs"), // "📼"
	"emoji-volcano": require("emoji-volcano"), // "🌋"
	"emoji-wedding": require("emoji-wedding"), // "💒"
	"emoji-weight-lifter": require("emoji-weight-lifter"), // "🏋"
	"emoji-whale": require("emoji-whale"), // "🐳"
	"emoji-white-flower": require("emoji-white-flower"), // "💮"
	"emoji-white-medium-square": require("emoji-white-medium-square"), // "◻️"
	"emoji-white-square-button": require("emoji-white-square-button"), // "🔳"
	"emoji-woman-woman-girl-boy": require("emoji-woman-woman-girl-boy"), // "👩‍👩‍👧‍👦"
	"emoji-world-map": require("emoji-world-map"), // "🗺"
	"emoji-zero": require("emoji-zero") // "0️⃣"
}

// MISC CHARACTERS
var character_acute_accent = require("@characters/acute-accent").default // ´
var character_ampersand = require("@characters/ampersand").default // &
var character_apostrophe = require("@characters/apostrophe").default // '
var character_asterisk = require("@characters/asterisk").default // *
var character_at_sign = require("@characters/at-sign").default // @
var character_backslash = require("@characters/backslash").default // \
var character_broken_bar = require("@characters/broken-bar").default // ¦
var character_cent_sign = require("@characters/cent-sign").default // ¢
var character_colon = require("@characters/colon").default // :
var character_comma = require("@characters/comma").default // ,
var character_copyright_sign = require("@characters/copyright-sign").default // ©
var character_degree_sign = require("@characters/degree-sign").default // °
var character_diaeresis = require("@characters/diaeresis").default // ¨
var character_division_sign = require("@characters/division-sign").default // ÷
var character_dollar_sign = require("@characters/dollar-sign").default // $
var character_exclamation_mark = require("@characters/exclamation-mark").default // !
var character_full_stop = require("@characters/full-stop").default // .
var character_grave_accent = require("@characters/grave-accent").default // `
var character_greater_than_sign = require("@characters/greater-than-sign").default // >
var character_interted_exclamation_mark = require("@characters/interted-exclamation-mark").default // ¡
var character_inverted_question_mark = require("@characters/inverted-question-mark").default // ¿
var character_left_curly_bracket = require("@characters/left-curly-bracket").default // {
var character_left_parenthesis = require("@characters/left-parenthesis").default // (
var character_left_pointing_double_angle_quotation_mark = require("@characters/left-pointing-double-angle-quotation-mark").default // «
var character_left_square_bracket = require("@characters/left-square-bracket").default // [
var character_less_than_sign = require("@characters/less-than-sign").default // <
var character_macron = require("@characters/macron").default // ¯
var character_micro_sign = require("@characters/micro-sign").default // μ
var character_middle_dot = require("@characters/middle-dot").default // ·
var character_minus_sign = require("@characters/minus-sign").default // -
var character_multiplication_sign = require("@characters/multiplication-sign").default // ×
var character_not_sign = require("@characters/not-sign").default // ¬
var character_number_sign = require("@characters/number-sign").default // #
var character_percent_sign = require("@characters/percent-sign").default // %
var character_pilcrow_sign = require("@characters/pilcrow-sign").default // ¶
var character_plus_minus_sign = require("@characters/plus-minus-sign").default // ±
var character_plus_sign = require("@characters/plus-sign").default // +
var character_pound_sign = require("@characters/pound-sign").default // £
var character_question_mark = require("@characters/question-mark").default // ?
var character_quotation_mark = require("@characters/quotation-mark").default // "
var character_registered_sign = require("@characters/registered-sign").default // ®
var character_right_curly_bracket = require("@characters/right-curly-bracket").default // }
var character_right_parenthesis = require("@characters/right-parenthesis").default // )
var character_right_pointing_double_angle_quotation_mark = require("@characters/right-pointing-double-angle-quotation-mark").default // »
var character_right_square_bracket = require("@characters/right-square-bracket").default // ]
var character_section_sign = require("@characters/section-sign").default // §
var character_semicolon = require("@characters/semicolon").default // ;
var character_slash = require("@characters/slash").default // /
var character_space = require("@characters/space").default //  
var character_tilde = require("@characters/tilde").default // ~
var character_yen_sign = require("@characters/yen-sign").default // ¥

function stringIdentity(str) {
	if (!isString(str) && ($String(str) === str)) {
		return immediateError(
			"The first argument to stringIdentity must be a string, and not an object string (e.g. new String(\"hi\")). Received: " + String(str),
			ErrorType.TypeError
		)
	} else {
		try {
			return stringIdentityCommonStrings(str)
		} catch {
			return generalConcat(...(splitString(str, emptyString).map((currentValue) => {
				try {
					return stringIdentityCommonStrings(currentValue)
				} catch {
					return fromCharCode(currentValue.charCodeAt(0))
				}
			})))
		}
	}
}

function stringIdentityCommonStrings(str) {
	if (eqstrings(str, emptyString)) return emptyString
	if (eqstrings(str, space)) return space
	if (eqstrings(str, lowercase_a)) return lowercase_a
	if (eqstrings(str, lowercase_b)) return lowercase_b
	if (eqstrings(str, lowercase_c)) return lowercase_c
	if (eqstrings(str, lowercase_d)) return lowercase_d
	if (eqstrings(str, lowercase_e)) return lowercase_e
	if (eqstrings(str, lowercase_f)) return lowercase_f
	if (eqstrings(str, lowercase_g)) return lowercase_g
	if (eqstrings(str, lowercase_h)) return lowercase_h
	if (eqstrings(str, lowercase_i)) return lowercase_i
	if (eqstrings(str, lowercase_j)) return lowercase_j
	if (eqstrings(str, lowercase_k)) return lowercase_k
	if (eqstrings(str, lowercase_l)) return lowercase_l
	if (eqstrings(str, lowercase_m)) return lowercase_m
	if (eqstrings(str, lowercase_n)) return lowercase_n
	if (eqstrings(str, lowercase_o)) return lowercase_o
	if (eqstrings(str, lowercase_p)) return lowercase_p
	if (eqstrings(str, lowercase_q)) return lowercase_q
	if (eqstrings(str, lowercase_r)) return lowercase_r
	if (eqstrings(str, lowercase_s)) return lowercase_s
	if (eqstrings(str, lowercase_t)) return lowercase_t
	if (eqstrings(str, lowercase_u)) return lowercase_u
	if (eqstrings(str, lowercase_v)) return lowercase_v
	if (eqstrings(str, lowercase_w)) return lowercase_w
	if (eqstrings(str, lowercase_x)) return lowercase_x
	if (eqstrings(str, lowercase_y)) return lowercase_y
	if (eqstrings(str, lowercase_z)) return lowercase_z
	if (eqstrings(str, uppercase_a)) return uppercase_a
	if (eqstrings(str, uppercase_b)) return uppercase_b
	if (eqstrings(str, uppercase_c)) return uppercase_c
	if (eqstrings(str, uppercase_d)) return uppercase_d
	if (eqstrings(str, uppercase_e)) return uppercase_e
	if (eqstrings(str, uppercase_f)) return uppercase_f
	if (eqstrings(str, uppercase_g)) return uppercase_g
	if (eqstrings(str, uppercase_h)) return uppercase_h
	if (eqstrings(str, uppercase_i)) return uppercase_i
	if (eqstrings(str, uppercase_j)) return uppercase_j
	if (eqstrings(str, uppercase_k)) return uppercase_k
	if (eqstrings(str, uppercase_l)) return uppercase_l
	if (eqstrings(str, uppercase_m)) return uppercase_m
	if (eqstrings(str, uppercase_n)) return uppercase_n
	if (eqstrings(str, uppercase_o)) return uppercase_o
	if (eqstrings(str, uppercase_p)) return uppercase_p
	if (eqstrings(str, uppercase_q)) return uppercase_q
	if (eqstrings(str, uppercase_r)) return uppercase_r
	if (eqstrings(str, uppercase_s)) return uppercase_s
	if (eqstrings(str, uppercase_t)) return uppercase_t
	if (eqstrings(str, uppercase_u)) return uppercase_u
	if (eqstrings(str, uppercase_v)) return uppercase_v
	if (eqstrings(str, uppercase_w)) return uppercase_w
	if (eqstrings(str, uppercase_x)) return uppercase_x
	if (eqstrings(str, uppercase_y)) return uppercase_y
	if (eqstrings(str, uppercase_z)) return uppercase_z
	if (eqstrings(str, lowercase_alphabet)) return lowercase_alphabet
	if (eqstrings(str, uppercase_alphabet)) return uppercase_alphabet
	if (eqstrings(str, fizz)) return fizz
	if (eqstrings(str, buzz)) return buzz
	if (eqstrings(str, fizzbuzz)) return fizzbuzz
	if (eqstrings(str, creashaks)) return creashaks
	if (eqstrings(str, organzine)) return organzine
	if (eqstrings(str, creashaksOrganzine)) return creashaksOrganzine
	if (eqstrings(str, emojis["emoji-100"])) return emojis["emoji-100"]
	if (eqstrings(str, emojis["emoji-1234"])) return emojis["emoji-1234"]
	if (eqstrings(str, emojis["emoji-abcd"])) return emojis["emoji-abcd"]
	if (eqstrings(str, emojis["emoji-airplane-departure"])) return emojis["emoji-airplane-departure"]
	if (eqstrings(str, emojis["emoji-alembic"])) return emojis["emoji-alembic"]
	if (eqstrings(str, emojis["emoji-ant"])) return emojis["emoji-ant"]
	if (eqstrings(str, emojis["emoji-apple"])) return emojis["emoji-apple"]
	if (eqstrings(str, emojis["emoji-articulated-lorry"])) return emojis["emoji-articulated-lorry"]
	if (eqstrings(str, emojis["emoji-bar-chart"])) return emojis["emoji-bar-chart"]
	if (eqstrings(str, emojis["emoji-basketball"])) return emojis["emoji-basketball"]
	if (eqstrings(str, emojis["emoji-bath"])) return emojis["emoji-bath"]
	if (eqstrings(str, emojis["emoji-blue-book"])) return emojis["emoji-blue-book"]
	if (eqstrings(str, emojis["emoji-bookmark-tabs"])) return emojis["emoji-bookmark-tabs"]
	if (eqstrings(str, emojis["emoji-bread"])) return emojis["emoji-bread"]
	if (eqstrings(str, emojis["emoji-bulb"])) return emojis["emoji-bulb"]
	if (eqstrings(str, emojis["emoji-camping"])) return emojis["emoji-camping"]
	if (eqstrings(str, emojis["emoji-candle"])) return emojis["emoji-candle"]
	if (eqstrings(str, emojis["emoji-car"])) return emojis["emoji-car"]
	if (eqstrings(str, emojis["emoji-card-index-dividers"])) return emojis["emoji-card-index-dividers"]
	if (eqstrings(str, emojis["emoji-cat"])) return emojis["emoji-cat"]
	if (eqstrings(str, emojis["emoji-cd"])) return emojis["emoji-cd"]
	if (eqstrings(str, emojis["emoji-champagne"])) return emojis["emoji-champagne"]
	if (eqstrings(str, emojis["emoji-checkered-flag"])) return emojis["emoji-checkered-flag"]
	if (eqstrings(str, emojis["emoji-cherry-blossom"])) return emojis["emoji-cherry-blossom"]
	if (eqstrings(str, emojis["emoji-city-sunrise"])) return emojis["emoji-city-sunrise"]
	if (eqstrings(str, emojis["emoji-cityscape"])) return emojis["emoji-cityscape"]
	if (eqstrings(str, emojis["emoji-clapper"])) return emojis["emoji-clapper"]
	if (eqstrings(str, emojis["emoji-clock1"])) return emojis["emoji-clock1"]
	if (eqstrings(str, emojis["emoji-clock10"])) return emojis["emoji-clock10"]
	if (eqstrings(str, emojis["emoji-clock12"])) return emojis["emoji-clock12"]
	if (eqstrings(str, emojis["emoji-clock3"])) return emojis["emoji-clock3"]
	if (eqstrings(str, emojis["emoji-clock330"])) return emojis["emoji-clock330"]
	if (eqstrings(str, emojis["emoji-clock530"])) return emojis["emoji-clock530"]
	if (eqstrings(str, emojis["emoji-clock6"])) return emojis["emoji-clock6"]
	if (eqstrings(str, emojis["emoji-clock630"])) return emojis["emoji-clock630"]
	if (eqstrings(str, emojis["emoji-clock830"])) return emojis["emoji-clock830"]
	if (eqstrings(str, emojis["emoji-clock9"])) return emojis["emoji-clock9"]
	if (eqstrings(str, emojis["emoji-cocktail"])) return emojis["emoji-cocktail"]
	if (eqstrings(str, emojis["emoji-coffee"])) return emojis["emoji-coffee"]
	if (eqstrings(str, emojis["emoji-comet"])) return emojis["emoji-comet"]
	if (eqstrings(str, emojis["emoji-compression"])) return emojis["emoji-compression"]
	if (eqstrings(str, emojis["emoji-computer"])) return emojis["emoji-computer"]
	if (eqstrings(str, emojis["emoji-construction"])) return emojis["emoji-construction"]
	if (eqstrings(str, emojis["emoji-control-knobs"])) return emojis["emoji-control-knobs"]
	if (eqstrings(str, emojis["emoji-cop"])) return emojis["emoji-cop"]
	if (eqstrings(str, emojis["emoji-copyright"])) return emojis["emoji-copyright"]
	if (eqstrings(str, emojis["emoji-crab"])) return emojis["emoji-crab"]
	if (eqstrings(str, emojis["emoji-crescent-moon"])) return emojis["emoji-crescent-moon"]
	if (eqstrings(str, emojis["emoji-crossed-flags"])) return emojis["emoji-crossed-flags"]
	if (eqstrings(str, emojis["emoji-cry"])) return emojis["emoji-cry"]
	if (eqstrings(str, emojis["emoji-crystal-ball"])) return emojis["emoji-crystal-ball"]
	if (eqstrings(str, emojis["emoji-currency-exchange"])) return emojis["emoji-currency-exchange"]
	if (eqstrings(str, emojis["emoji-dark-sunglasses"])) return emojis["emoji-dark-sunglasses"]
	if (eqstrings(str, emojis["emoji-dart"])) return emojis["emoji-dart"]
	if (eqstrings(str, emojis["emoji-de"])) return emojis["emoji-de"]
	if (eqstrings(str, emojis["emoji-department-store"])) return emojis["emoji-department-store"]
	if (eqstrings(str, emojis["emoji-door"])) return emojis["emoji-door"]
	if (eqstrings(str, emojis["emoji-doughnut"])) return emojis["emoji-doughnut"]
	if (eqstrings(str, emojis["emoji-egg"])) return emojis["emoji-egg"]
	if (eqstrings(str, emojis["emoji-eight-pointed-black-star"])) return emojis["emoji-eight-pointed-black-star"]
	if (eqstrings(str, emojis["emoji-eight-spoked-asterisk"])) return emojis["emoji-eight-spoked-asterisk"]
	if (eqstrings(str, emojis["emoji-envelope-with-arrow"])) return emojis["emoji-envelope-with-arrow"]
	if (eqstrings(str, emojis["emoji-es"])) return emojis["emoji-es"]
	if (eqstrings(str, emojis["emoji-euro"])) return emojis["emoji-euro"]
	if (eqstrings(str, emojis["emoji-eyeglasses"])) return emojis["emoji-eyeglasses"]
	if (eqstrings(str, emojis["emoji-eyes"])) return emojis["emoji-eyes"]
	if (eqstrings(str, emojis["emoji-family"])) return emojis["emoji-family"]
	if (eqstrings(str, emojis["emoji-film-projector"])) return emojis["emoji-film-projector"]
	if (eqstrings(str, emojis["emoji-fire"])) return emojis["emoji-fire"]
	if (eqstrings(str, emojis["emoji-fire-engine"])) return emojis["emoji-fire-engine"]
	if (eqstrings(str, emojis["emoji-fireworks"])) return emojis["emoji-fireworks"]
	if (eqstrings(str, emojis["emoji-fish"])) return emojis["emoji-fish"]
	if (eqstrings(str, emojis["emoji-flag-ag"])) return emojis["emoji-flag-ag"]
	if (eqstrings(str, emojis["emoji-flag-am"])) return emojis["emoji-flag-am"]
	if (eqstrings(str, emojis["emoji-flag-ax"])) return emojis["emoji-flag-ax"]
	if (eqstrings(str, emojis["emoji-flag-bz"])) return emojis["emoji-flag-bz"]
	if (eqstrings(str, emojis["emoji-flag-cm"])) return emojis["emoji-flag-cm"]
	if (eqstrings(str, emojis["emoji-flag-cx"])) return emojis["emoji-flag-cx"]
	if (eqstrings(str, emojis["emoji-flag-ee"])) return emojis["emoji-flag-ee"]
	if (eqstrings(str, emojis["emoji-flag-es"])) return emojis["emoji-flag-es"]
	if (eqstrings(str, emojis["emoji-flag-ga"])) return emojis["emoji-flag-ga"]
	if (eqstrings(str, emojis["emoji-flag-gu"])) return emojis["emoji-flag-gu"]
	if (eqstrings(str, emojis["emoji-flag-je"])) return emojis["emoji-flag-je"]
	if (eqstrings(str, emojis["emoji-flag-kh"])) return emojis["emoji-flag-kh"]
	if (eqstrings(str, emojis["emoji-flag-kn"])) return emojis["emoji-flag-kn"]
	if (eqstrings(str, emojis["emoji-flag-na"])) return emojis["emoji-flag-na"]
	if (eqstrings(str, emojis["emoji-flag-nu"])) return emojis["emoji-flag-nu"]
	if (eqstrings(str, emojis["emoji-flag-pf"])) return emojis["emoji-flag-pf"]
	if (eqstrings(str, emojis["emoji-flag-pr"])) return emojis["emoji-flag-pr"]
	if (eqstrings(str, emojis["emoji-flag-pt"])) return emojis["emoji-flag-pt"]
	if (eqstrings(str, emojis["emoji-flag-sh"])) return emojis["emoji-flag-sh"]
	if (eqstrings(str, emojis["emoji-flag-so"])) return emojis["emoji-flag-so"]
	if (eqstrings(str, emojis["emoji-flag-ss"])) return emojis["emoji-flag-ss"]
	if (eqstrings(str, emojis["emoji-flag-vu"])) return emojis["emoji-flag-vu"]
	if (eqstrings(str, emojis["emoji-flag-wf"])) return emojis["emoji-flag-wf"]
	if (eqstrings(str, emojis["emoji-flag-ws"])) return emojis["emoji-flag-ws"]
	if (eqstrings(str, emojis["emoji-fleur-de-lis"])) return emojis["emoji-fleur-de-lis"]
	if (eqstrings(str, emojis["emoji-foggy"])) return emojis["emoji-foggy"]
	if (eqstrings(str, emojis["emoji-footprints"])) return emojis["emoji-footprints"]
	if (eqstrings(str, emojis["emoji-full-moon"])) return emojis["emoji-full-moon"]
	if (eqstrings(str, emojis["emoji-funeral-urn"])) return emojis["emoji-funeral-urn"]
	if (eqstrings(str, emojis["emoji-goat"])) return emojis["emoji-goat"]
	if (eqstrings(str, emojis["emoji-golf"])) return emojis["emoji-golf"]
	if (eqstrings(str, emojis["emoji-green-apple"])) return emojis["emoji-green-apple"]
	if (eqstrings(str, emojis["emoji-gun"])) return emojis["emoji-gun"]
	if (eqstrings(str, emojis["emoji-haircut"])) return emojis["emoji-haircut"]
	if (eqstrings(str, emojis["emoji-hamster"])) return emojis["emoji-hamster"]
	if (eqstrings(str, emojis["emoji-hash"])) return emojis["emoji-hash"]
	if (eqstrings(str, emojis["emoji-headphones"])) return emojis["emoji-headphones"]
	if (eqstrings(str, emojis["emoji-heartbeat"])) return emojis["emoji-heartbeat"]
	if (eqstrings(str, emojis["emoji-hearts"])) return emojis["emoji-hearts"]
	if (eqstrings(str, emojis["emoji-heavy-check-mark"])) return emojis["emoji-heavy-check-mark"]
	if (eqstrings(str, emojis["emoji-helicopter"])) return emojis["emoji-helicopter"]
	if (eqstrings(str, emojis["emoji-herb"])) return emojis["emoji-herb"]
	if (eqstrings(str, emojis["emoji-hocho"])) return emojis["emoji-hocho"]
	if (eqstrings(str, emojis["emoji-hotdog"])) return emojis["emoji-hotdog"]
	if (eqstrings(str, emojis["emoji-hotel"])) return emojis["emoji-hotel"]
	if (eqstrings(str, emojis["emoji-hotsprings"])) return emojis["emoji-hotsprings"]
	if (eqstrings(str, emojis["emoji-house"])) return emojis["emoji-house"]
	if (eqstrings(str, emojis["emoji-inbox-tray"])) return emojis["emoji-inbox-tray"]
	if (eqstrings(str, emojis["emoji-information-source"])) return emojis["emoji-information-source"]
	if (eqstrings(str, emojis["emoji-innocent"])) return emojis["emoji-innocent"]
	if (eqstrings(str, emojis["emoji-izakaya-lantern"])) return emojis["emoji-izakaya-lantern"]
	if (eqstrings(str, emojis["emoji-japan"])) return emojis["emoji-japan"]
	if (eqstrings(str, emojis["emoji-japanese-castle"])) return emojis["emoji-japanese-castle"]
	if (eqstrings(str, emojis["emoji-joy"])) return emojis["emoji-joy"]
	if (eqstrings(str, emojis["emoji-keyboard"])) return emojis["emoji-keyboard"]
	if (eqstrings(str, emojis["emoji-keycap-star"])) return emojis["emoji-keycap-star"]
	if (eqstrings(str, emojis["emoji-kissing"])) return emojis["emoji-kissing"]
	if (eqstrings(str, emojis["emoji-kissing-heart"])) return emojis["emoji-kissing-heart"]
	if (eqstrings(str, emojis["emoji-knife-fork-plate"])) return emojis["emoji-knife-fork-plate"]
	if (eqstrings(str, emojis["emoji-koko"])) return emojis["emoji-koko"]
	if (eqstrings(str, emojis["emoji-lantern"])) return emojis["emoji-lantern"]
	if (eqstrings(str, emojis["emoji-laughing"])) return emojis["emoji-laughing"]
	if (eqstrings(str, emojis["emoji-leaves"])) return emojis["emoji-leaves"]
	if (eqstrings(str, emojis["emoji-left-luggage"])) return emojis["emoji-left-luggage"]
	if (eqstrings(str, emojis["emoji-libra"])) return emojis["emoji-libra"]
	if (eqstrings(str, emojis["emoji-lightning"])) return emojis["emoji-lightning"]
	if (eqstrings(str, emojis["emoji-lollipop"])) return emojis["emoji-lollipop"]
	if (eqstrings(str, emojis["emoji-love-letter"])) return emojis["emoji-love-letter"]
	if (eqstrings(str, emojis["emoji-lower-left-ballpoint-pen"])) return emojis["emoji-lower-left-ballpoint-pen"]
	if (eqstrings(str, emojis["emoji-mag"])) return emojis["emoji-mag"]
	if (eqstrings(str, emojis["emoji-mahjong"])) return emojis["emoji-mahjong"]
	if (eqstrings(str, emojis["emoji-man-and-woman-holding-hands"])) return emojis["emoji-man-and-woman-holding-hands"]
	if (eqstrings(str, emojis["emoji-man-kiss-man"])) return emojis["emoji-man-kiss-man"]
	if (eqstrings(str, emojis["emoji-man-man-boy-boy"])) return emojis["emoji-man-man-boy-boy"]
	if (eqstrings(str, emojis["emoji-man-with-turban"])) return emojis["emoji-man-with-turban"]
	if (eqstrings(str, emojis["emoji-man-woman-boy"])) return emojis["emoji-man-woman-boy"]
	if (eqstrings(str, emojis["emoji-man-woman-girl"])) return emojis["emoji-man-woman-girl"]
	if (eqstrings(str, emojis["emoji-man-woman-girl-boy"])) return emojis["emoji-man-woman-girl-boy"]
	if (eqstrings(str, emojis["emoji-mantelpiece-clock"])) return emojis["emoji-mantelpiece-clock"]
	if (eqstrings(str, emojis["emoji-microphone"])) return emojis["emoji-microphone"]
	if (eqstrings(str, emojis["emoji-middle-finger"])) return emojis["emoji-middle-finger"]
	if (eqstrings(str, emojis["emoji-milky-way"])) return emojis["emoji-milky-way"]
	if (eqstrings(str, emojis["emoji-money-mouth-face"])) return emojis["emoji-money-mouth-face"]
	if (eqstrings(str, emojis["emoji-monkey-face"])) return emojis["emoji-monkey-face"]
	if (eqstrings(str, emojis["emoji-mostly-sunny"])) return emojis["emoji-mostly-sunny"]
	if (eqstrings(str, emojis["emoji-mount-fuji"])) return emojis["emoji-mount-fuji"]
	if (eqstrings(str, emojis["emoji-mountain"])) return emojis["emoji-mountain"]
	if (eqstrings(str, emojis["emoji-mouse2"])) return emojis["emoji-mouse2"]
	if (eqstrings(str, emojis["emoji-mushroom"])) return emojis["emoji-mushroom"]
	if (eqstrings(str, emojis["emoji-name-badge"])) return emojis["emoji-name-badge"]
	if (eqstrings(str, emojis["emoji-non-potable-water"])) return emojis["emoji-non-potable-water"]
	if (eqstrings(str, emojis["emoji-nose"])) return emojis["emoji-nose"]
	if (eqstrings(str, emojis["emoji-o2"])) return emojis["emoji-o2"]
	if (eqstrings(str, emojis["emoji-om-symbol"])) return emojis["emoji-om-symbol"]
	if (eqstrings(str, emojis["emoji-on"])) return emojis["emoji-on"]
	if (eqstrings(str, emojis["emoji-oncoming-taxi"])) return emojis["emoji-oncoming-taxi"]
	if (eqstrings(str, emojis["emoji-one"])) return emojis["emoji-one"]
	if (eqstrings(str, emojis["emoji-outbox-tray"])) return emojis["emoji-outbox-tray"]
	if (eqstrings(str, emojis["emoji-package"])) return emojis["emoji-package"]
	if (eqstrings(str, emojis["emoji-palm-tree"])) return emojis["emoji-palm-tree"]
	if (eqstrings(str, emojis["emoji-paperclip"])) return emojis["emoji-paperclip"]
	if (eqstrings(str, emojis["emoji-parking"])) return emojis["emoji-parking"]
	if (eqstrings(str, emojis["emoji-part-alternation-mark"])) return emojis["emoji-part-alternation-mark"]
	if (eqstrings(str, emojis["emoji-passport-control"])) return emojis["emoji-passport-control"]
	if (eqstrings(str, emojis["emoji-phone"])) return emojis["emoji-phone"]
	if (eqstrings(str, emojis["emoji-pig"])) return emojis["emoji-pig"]
	if (eqstrings(str, emojis["emoji-pig-nose"])) return emojis["emoji-pig-nose"]
	if (eqstrings(str, emojis["emoji-pig2"])) return emojis["emoji-pig2"]
	if (eqstrings(str, emojis["emoji-pill"])) return emojis["emoji-pill"]
	if (eqstrings(str, emojis["emoji-police-car"])) return emojis["emoji-police-car"]
	if (eqstrings(str, emojis["emoji-poodle"])) return emojis["emoji-poodle"]
	if (eqstrings(str, emojis["emoji-poop"])) return emojis["emoji-poop"]
	if (eqstrings(str, emojis["emoji-postal-horn"])) return emojis["emoji-postal-horn"]
	if (eqstrings(str, emojis["emoji-postbox"])) return emojis["emoji-postbox"]
	if (eqstrings(str, emojis["emoji-purse"])) return emojis["emoji-purse"]
	if (eqstrings(str, emojis["emoji-rainbow"])) return emojis["emoji-rainbow"]
	if (eqstrings(str, emojis["emoji-raised-hand"])) return emojis["emoji-raised-hand"]
	if (eqstrings(str, emojis["emoji-repeat"])) return emojis["emoji-repeat"]
	if (eqstrings(str, emojis["emoji-repeat-one"])) return emojis["emoji-repeat-one"]
	if (eqstrings(str, emojis["emoji-rice"])) return emojis["emoji-rice"]
	if (eqstrings(str, emojis["emoji-ring"])) return emojis["emoji-ring"]
	if (eqstrings(str, emojis["emoji-rooster"])) return emojis["emoji-rooster"]
	if (eqstrings(str, emojis["emoji-rose"])) return emojis["emoji-rose"]
	if (eqstrings(str, emojis["emoji-rotating-light"])) return emojis["emoji-rotating-light"]
	if (eqstrings(str, emojis["emoji-running"])) return emojis["emoji-running"]
	if (eqstrings(str, emojis["emoji-satellite"])) return emojis["emoji-satellite"]
	if (eqstrings(str, emojis["emoji-saxophone"])) return emojis["emoji-saxophone"]
	if (eqstrings(str, emojis["emoji-scorpion"])) return emojis["emoji-scorpion"]
	if (eqstrings(str, emojis["emoji-scream"])) return emojis["emoji-scream"]
	if (eqstrings(str, emojis["emoji-secret"])) return emojis["emoji-secret"]
	if (eqstrings(str, emojis["emoji-shower"])) return emojis["emoji-shower"]
	if (eqstrings(str, emojis["emoji-signal-strength"])) return emojis["emoji-signal-strength"]
	if (eqstrings(str, emojis["emoji-six"])) return emojis["emoji-six"]
	if (eqstrings(str, emojis["emoji-ski"])) return emojis["emoji-ski"]
	if (eqstrings(str, emojis["emoji-small-red-triangle"])) return emojis["emoji-small-red-triangle"]
	if (eqstrings(str, emojis["emoji-smile"])) return emojis["emoji-smile"]
	if (eqstrings(str, emojis["emoji-smile-cat"])) return emojis["emoji-smile-cat"]
	if (eqstrings(str, emojis["emoji-smirk-cat"])) return emojis["emoji-smirk-cat"]
	if (eqstrings(str, emojis["emoji-space-invader"])) return emojis["emoji-space-invader"]
	if (eqstrings(str, emojis["emoji-sparkle"])) return emojis["emoji-sparkle"]
	if (eqstrings(str, emojis["emoji-sparkler"])) return emojis["emoji-sparkler"]
	if (eqstrings(str, emojis["emoji-star-and-crescent"])) return emojis["emoji-star-and-crescent"]
	if (eqstrings(str, emojis["emoji-star-of-david"])) return emojis["emoji-star-of-david"]
	if (eqstrings(str, emojis["emoji-steam-locomotive"])) return emojis["emoji-steam-locomotive"]
	if (eqstrings(str, emojis["emoji-strawberry"])) return emojis["emoji-strawberry"]
	if (eqstrings(str, emojis["emoji-sunflower"])) return emojis["emoji-sunflower"]
	if (eqstrings(str, emojis["emoji-sunglasses"])) return emojis["emoji-sunglasses"]
	if (eqstrings(str, emojis["emoji-sushi"])) return emojis["emoji-sushi"]
	if (eqstrings(str, emojis["emoji-sweat"])) return emojis["emoji-sweat"]
	if (eqstrings(str, emojis["emoji-sweat-smile"])) return emojis["emoji-sweat-smile"]
	if (eqstrings(str, emojis["emoji-synagogue"])) return emojis["emoji-synagogue"]
	if (eqstrings(str, emojis["emoji-taxi"])) return emojis["emoji-taxi"]
	if (eqstrings(str, emojis["emoji-tea"])) return emojis["emoji-tea"]
	if (eqstrings(str, emojis["emoji-thinking-face"])) return emojis["emoji-thinking-face"]
	if (eqstrings(str, emojis["emoji-three-button-mouse"])) return emojis["emoji-three-button-mouse"]
	if (eqstrings(str, emojis["emoji-tm"])) return emojis["emoji-tm"]
	if (eqstrings(str, emojis["emoji-top"])) return emojis["emoji-top"]
	if (eqstrings(str, emojis["emoji-trackball"])) return emojis["emoji-trackball"]
	if (eqstrings(str, emojis["emoji-trolleybus"])) return emojis["emoji-trolleybus"]
	if (eqstrings(str, emojis["emoji-tulip"])) return emojis["emoji-tulip"]
	if (eqstrings(str, emojis["emoji-two"])) return emojis["emoji-two"]
	if (eqstrings(str, emojis["emoji-two-men-holding-hands"])) return emojis["emoji-two-men-holding-hands"]
	if (eqstrings(str, emojis["emoji-u6709"])) return emojis["emoji-u6709"]
	if (eqstrings(str, emojis["emoji-u7533"])) return emojis["emoji-u7533"]
	if (eqstrings(str, emojis["emoji-umbrella-on-ground"])) return emojis["emoji-umbrella-on-ground"]
	if (eqstrings(str, emojis["emoji-us"])) return emojis["emoji-us"]
	if (eqstrings(str, emojis["emoji-vhs"])) return emojis["emoji-vhs"]
	if (eqstrings(str, emojis["emoji-volcano"])) return emojis["emoji-volcano"]
	if (eqstrings(str, emojis["emoji-wedding"])) return emojis["emoji-wedding"]
	if (eqstrings(str, emojis["emoji-weight-lifter"])) return emojis["emoji-weight-lifter"]
	if (eqstrings(str, emojis["emoji-whale"])) return emojis["emoji-whale"]
	if (eqstrings(str, emojis["emoji-white-flower"])) return emojis["emoji-white-flower"]
	if (eqstrings(str, emojis["emoji-white-medium-square"])) return emojis["emoji-white-medium-square"]
	if (eqstrings(str, emojis["emoji-white-square-button"])) return emojis["emoji-white-square-button"]
	if (eqstrings(str, emojis["emoji-woman-woman-girl-boy"])) return emojis["emoji-woman-woman-girl-boy"]
	if (eqstrings(str, emojis["emoji-world-map"])) return emojis["emoji-world-map"]
	if (eqstrings(str, emojis["emoji-zero"])) return emojis["emoji-zero"]
	if (eqstrings(str, character_acute_accent)) return character_acute_accent
	if (eqstrings(str, character_ampersand)) return character_ampersand
	if (eqstrings(str, character_apostrophe)) return character_apostrophe
	if (eqstrings(str, character_asterisk)) return character_asterisk
	if (eqstrings(str, character_at_sign)) return character_at_sign
	if (eqstrings(str, character_backslash)) return character_backslash
	if (eqstrings(str, character_broken_bar)) return character_broken_bar
	if (eqstrings(str, character_cent_sign)) return character_cent_sign
	if (eqstrings(str, character_colon)) return character_colon
	if (eqstrings(str, character_comma)) return character_comma
	if (eqstrings(str, character_copyright_sign)) return character_copyright_sign
	if (eqstrings(str, character_degree_sign)) return character_degree_sign
	if (eqstrings(str, character_diaeresis)) return character_diaeresis
	if (eqstrings(str, character_division_sign)) return character_division_sign
	if (eqstrings(str, character_dollar_sign)) return character_dollar_sign
	if (eqstrings(str, character_exclamation_mark)) return character_exclamation_mark
	if (eqstrings(str, character_full_stop)) return character_full_stop
	if (eqstrings(str, character_grave_accent)) return character_grave_accent
	if (eqstrings(str, character_greater_than_sign)) return character_greater_than_sign
	if (eqstrings(str, character_interted_exclamation_mark)) return character_interted_exclamation_mark
	if (eqstrings(str, character_inverted_question_mark)) return character_inverted_question_mark
	if (eqstrings(str, character_left_curly_bracket)) return character_left_curly_bracket
	if (eqstrings(str, character_left_parenthesis)) return character_left_parenthesis
	if (eqstrings(str, character_left_pointing_double_angle_quotation_mark)) return character_left_pointing_double_angle_quotation_mark
	if (eqstrings(str, character_left_square_bracket)) return character_left_square_bracket
	if (eqstrings(str, character_less_than_sign)) return character_less_than_sign
	if (eqstrings(str, character_macron)) return character_macron
	if (eqstrings(str, character_micro_sign)) return character_micro_sign
	if (eqstrings(str, character_middle_dot)) return character_middle_dot
	if (eqstrings(str, character_minus_sign)) return character_minus_sign
	if (eqstrings(str, character_multiplication_sign)) return character_multiplication_sign
	if (eqstrings(str, character_not_sign)) return character_not_sign
	if (eqstrings(str, character_number_sign)) return character_number_sign
	if (eqstrings(str, character_percent_sign)) return character_percent_sign
	if (eqstrings(str, character_pilcrow_sign)) return character_pilcrow_sign
	if (eqstrings(str, character_plus_minus_sign)) return character_plus_minus_sign
	if (eqstrings(str, character_plus_sign)) return character_plus_sign
	if (eqstrings(str, character_pound_sign)) return character_pound_sign
	if (eqstrings(str, character_question_mark)) return character_question_mark
	if (eqstrings(str, character_quotation_mark)) return character_quotation_mark
	if (eqstrings(str, character_registered_sign)) return character_registered_sign
	if (eqstrings(str, character_right_curly_bracket)) return character_right_curly_bracket
	if (eqstrings(str, character_right_parenthesis)) return character_right_parenthesis
	if (eqstrings(str, character_right_pointing_double_angle_quotation_mark)) return character_right_pointing_double_angle_quotation_mark
	if (eqstrings(str, character_right_square_bracket)) return character_right_square_bracket
	if (eqstrings(str, character_section_sign)) return character_section_sign
	if (eqstrings(str, character_semicolon)) return character_semicolon
	if (eqstrings(str, character_slash)) return character_slash
	if (eqstrings(str, character_space)) return character_space
	if (eqstrings(str, character_tilde)) return character_tilde
	if (eqstrings(str, character_yen_sign)) return character_yen_sign
	if (isWDS(str)) return generalConcat(uppercase_w, uppercase_d, uppercase_s)
	immediateError("if you see this error in the console everything's broken and the world is ending. take shelter", ErrorType.BaseError)
}

module.exports = stringIdentity