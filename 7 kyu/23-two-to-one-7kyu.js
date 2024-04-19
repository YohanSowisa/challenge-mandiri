// function removeDup(s) {
//   return s.split('').filter((e, i, s) => s.indexOf(e) == i).join('')
// }

// function longest(s1, s2) {
//   return removeDup(removeDup(s1) + removeDup(s2)).split('').sort().join('')
// }

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

// const longest = (s1, s2) => Array.from(new Set(s1 + s2)).sort().join('')

console.log(longest('aretheyhere', 'ysetheyarehere'))