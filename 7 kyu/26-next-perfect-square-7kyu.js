function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? Math.ceil(Math.sqrt(sq + 1)) ** 2 : -1
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(319225))