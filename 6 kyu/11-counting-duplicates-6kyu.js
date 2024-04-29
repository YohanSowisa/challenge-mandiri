function duplicateCount(text){
  let obj = {}
  let count = 0
  text = text.toLowerCase()

  for (let i of text) {
    if (!obj[i]) obj[i] = 1
    else obj[i]++
  }
  
  for (let i in obj) {
    if (obj[i] > 1) count++
  }

  return count
}

console.log(duplicateCount(''))
console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aabBcde'))