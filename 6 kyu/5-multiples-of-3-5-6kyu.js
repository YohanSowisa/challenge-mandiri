function solution(number){
  let sum = 0

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i
  }

  return number < 0 ? 0 : sum
}

// function solution(number){
//   return number < 1 ? 0 : [...Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b, 0);
// }

console.log(solution(10))
console.log(solution(200)) //9168