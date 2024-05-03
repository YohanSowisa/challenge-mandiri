function narcissistic(value) {
  return String(value).split('').map(e => +e).reduce((a, c) => a + c ** String(value).length, 0) === value
}

console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(122))
console.log(narcissistic(487))