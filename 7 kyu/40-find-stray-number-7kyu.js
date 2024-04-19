// function stray(numbers) {
//   if (numbers.sort((a, b) => a - b)[0] == numbers.sort((a, b) => a - b)[1]) {
//     return numbers.sort((a, b) => a - b)[numbers.length - 1]
//   }
//   return numbers.sort((a, b) => a - b)[0]
// }

function stray(numbers, sorted = numbers.sort()) {
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0]
}

console.log(stray([1, 1, 2]))
console.log(stray([1, 2, 1]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))