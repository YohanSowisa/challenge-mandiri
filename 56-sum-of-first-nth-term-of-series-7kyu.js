// function SeriesSum(n) {
//   let series = []
//   let length = 1
//   let i = 1

//   while (length <= n) {
//     series.push(eval(`1/${i}`))
//     length++
//     i += 3
//   }

//   return series.reduce((acc, cur) => acc + cur, 0).toFixed(2)
// }

function SeriesSum(n) {
  return Array(n).fill().map((_, i) => 3 * i + 1).reduce((acc, cur) => acc + 1 / cur, 0).toFixed(2);
}

console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(3))
console.log(SeriesSum(4))
console.log(SeriesSum(5))