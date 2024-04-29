function persistence(num) {
  let count = 0

  while (String(num).length != 1) {
    num = [...String(num)].map(e => +e).reduce((a, c) => a * c, 1)
    count++
  }

  return count
}

// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num.toString().split('').reduce((t, c) => c * t);
//   }
//   return i;
// }

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(25))
console.log(persistence(4))