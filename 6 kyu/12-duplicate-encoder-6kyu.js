function duplicateEncode(word){
  let obj = {}
  word = word.toLowerCase().split('')
  
  for (let i of word) {
    if (obj[i]) obj[i]++
    else obj[i] = 1
  }

  return word.map(e => obj[e] && obj[e] > 1 ? ')' : '(').join('')
}

// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }

// const duplicateEncode = s => s
//   .toLowerCase()
//   .split('')
//   .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
//   .join('');

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))