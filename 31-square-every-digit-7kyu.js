const squareDigits = num => parseInt(num.toString().split('').map(e => parseInt(e) ** 2).join(''))

console.log(squareDigits(3212))