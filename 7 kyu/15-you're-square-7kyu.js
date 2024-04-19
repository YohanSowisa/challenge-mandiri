const isSquare = n => (n / Math.sqrt(n)).toString().includes('.') ? false : n.toString().includes('-') ? false : true

// const isSquare = n => Math.sqrt(n) % 1 === 0

// const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(4))
console.log(isSquare(25))
console.log(isSquare(26))
console.log(isSquare(2530593025)) // true
console.log(isSquare(100)) // true