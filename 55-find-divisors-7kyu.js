function divisors(int) {
  let divisors = []

  for (let i = 0; i < int; i++) {
    if (i > 1 && i !== int && int % i === 0) divisors.push(i)
  }

  return divisors.length === 0 ? `${int} is prime` : divisors
}

console.log(divisors(12))
console.log(divisors(25))
console.log(divisors(13))