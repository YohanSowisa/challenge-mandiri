function powersOfTwo(n){
  let powArr = [1]
  for(let i = 1; i <= n; i++) {
    powArr.push(Math.pow(2, i))
  }
  return powArr
}

// function powersOfTwo(n) {
//   return [...Array(n + 1)].map((_, i) => 2 ** i)
// }

console.log(powersOfTwo(1))