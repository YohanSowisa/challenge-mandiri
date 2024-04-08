function reverseWords(str) {
  return str.split(' ').map(e => [...e].reverse().join('')).join(' ')
}

console.log(reverseWords('This is an example!'))
console.log(reverseWords('double  spaces'))