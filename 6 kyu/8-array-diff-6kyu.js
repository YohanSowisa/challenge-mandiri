// function arrayDiff(a, b) {
//   let arr = []
  
//   for (let num of a) {
//     if (b.indexOf(num) === -1) {
//       arr.push(num)
//     }
//   }

//   return arr
// }

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}

// function arrayDiff(a, b) {
//   b = new Set(b)
//   return a.filter(v => !b.has(v))
// }

console.log(arrayDiff([1, 2, 2], [2]))
console.log(arrayDiff([1, 2, 2], []))
console.log(arrayDiff([], [1, 2]))