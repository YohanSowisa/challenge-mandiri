function validatePIN(pin) {
  var n = pin.length
  if (n != 4 && n != 6) return false
  for (var i in pin) if (pin[i] > '9' || pin[i] < '0') return false
  return true
}

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("123"));
console.log(validatePIN("1234"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("8G4132"));

// BELAJAR LAGi