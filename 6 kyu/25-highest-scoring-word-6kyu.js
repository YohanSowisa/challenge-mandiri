function high(x) {
  const value = x.split(' ').map((e, i) => [...e].reduce((a, c) => a += c.charCodeAt() - 96, 0))
  return x.split(' ')[value.indexOf(Math.max(...value))]
}

console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))