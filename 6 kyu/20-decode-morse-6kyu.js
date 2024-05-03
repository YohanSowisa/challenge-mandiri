const decodeMorse = function (morseCode) {
  var codes = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
  }
  // let result = []
  let words = morseCode.trim().split('   ')
  console.log(words)

  return words.reduce((res, word) => {
    let parsed = word.split(' ').map(e => codes[e].toUpperCase()).join('')
    res.push(parsed)
    return res
  }, []).join(' ')
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse('   .... . -.--   '));
