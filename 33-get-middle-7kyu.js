function getMiddle(s) {
  return (s.length % 2 == 0) ? `${s[s.length / 2 - 1]}${s[s.length / 2]}` : (s.length < 2) ? s : s[Math.floor(s.length / 2)]
}

console.log(getMiddle('test'))
console.log(getMiddle('testing'))
console.log(getMiddle('middle'))
console.log(getMiddle('A'))