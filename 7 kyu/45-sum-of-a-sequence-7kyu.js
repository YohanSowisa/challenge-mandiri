const sequenceSum = (begin, end, step) => {
  let sum = 0
  while (begin <= end) {
    sum += begin
    begin += step
  }
  return sum
}

// sequenceSum = (begin, end, step) =>  begin > end ? 0 : begin + sequenceSum(begin + step, end, step);

console.log(sequenceSum(2, 6, 2))
console.log(sequenceSum(1, 5, 1))
console.log(sequenceSum(1, 5, 3))