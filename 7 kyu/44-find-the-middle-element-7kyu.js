function gimme (triplet) {
  return triplet.indexOf(triplet.find(e => e > Math.min(...triplet) && e < Math.max(...triplet)))
}

// function gimme(a) {
//   return a.indexOf(a.concat().sort((a, b) => a - b)[1])
// }

// const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((a, b) => a - b)[1])
// }

console.log(gimme([2, 3, 1]))
console.log(gimme([5, 10, 14]))
console.log(gimme([2.1, 3.2, 1.4]))
console.log(gimme([-2, -3.2, 1]))