// function dontGiveMeFive(start, end) {
//   let num = []
//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes('5')) {
//       num.push(i)
//     }
//   }
//   return num.length
// }

function dontGiveMeFive(start, end) {
  return Array.from(Array(end - start + 1), (_, i) => i + start).filter(e => e.toString().indexOf('5') === -1).length
}

console.log(dontGiveMeFive(1, 9))
console.log(dontGiveMeFive(4, 17))