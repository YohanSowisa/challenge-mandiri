function nbDig(n, d) {
  return Array.from({length: n + 1}, (_, i) => i ** 2).join('').split(d).length - 1
}

console.log(nbDig(10, 1))
console.log(nbDig(25, 1))
console.log(nbDig(5750, 0))
console.log(nbDig(11011, 2))