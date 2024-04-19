function getSum(a, b) {
  let numbers = []

  if (a <= b) {
    for (let i = a; i <= b; i++) {
      numbers.push(i)
    }
  } else {
    for (let i = a; i >= b; i--) {
      numbers.push(i)
    }
  }

  return numbers.reduce((acc, cur) => acc + cur, 0)
}

// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }

// function GetSum(a,b) {
//   return (Math.abs(a - b) + 1) * (a+b) / 2;
// }

console.log(getSum(1, 0))
console.log(getSum(1, 2))
console.log(getSum(0, 1))
console.log(getSum(1, 1))
console.log(getSum(-1, 0))
console.log(getSum(-1, 2))