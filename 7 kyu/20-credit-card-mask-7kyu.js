function maskify(cc) {
  let masked = []

  if (cc.length > 4) {
    masked.push('#'.repeat((cc.length - 4) + cc.split('').filter(e => e == ' ').length), cc.slice(cc.length - 4, cc.length))
  }
  else masked.push(cc)

  return masked.join('')
}

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
// }

// function maskify(cc) {
//   return cc.slice(-4).padStart(cc.length ,'#')
// }

// maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4)

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))
console.log(maskify('Skippy'))
console.log(maskify('Nananananananananananananananana Batman!'))