function createPhoneNumber(numbers) {
  let a = [numbers[0], numbers[1], numbers[2]].join('')
  let b = [numbers[3], numbers[4], numbers[5]].join('')
  let c = [numbers[6], numbers[7], numbers[8], numbers[9]].join('')
  return `(${a}) ${b}-${c}`
}

// function createPhoneNumber(numbers) {
//   var format = "(xxx) xxx-xxxx"
//   for(let num of numbers) {
//     format = format.replace('x', num)
//   }
//   return format
// }

// function createPhoneNumber(numbers){
//   return numbers.reduce((a, c) => a.replace('x', c), '(xxx) xxx-xxxx')
// }

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))