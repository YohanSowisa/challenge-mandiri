function XO(str) {
  str = str.toLowerCase()
  return str.split('').filter(e => e == 'x').length === str.split('').filter(e => e == 'o').length
}

// function XO(str) {
//   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
// }

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))
console.log('asdasd'.split('').join(''))