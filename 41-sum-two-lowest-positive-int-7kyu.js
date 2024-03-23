const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b).slice(0, 2).reduce((acc, cur) => acc + cur, 0)

// Destructuring
// function sumTwoSmallestNumbers(numbers) {  
//   var [ a, b ] = numbers.sort((a, b) => a - b)
//   return a + b
// }

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))