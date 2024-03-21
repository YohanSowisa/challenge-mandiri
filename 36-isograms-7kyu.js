function isIsogram(str){
  return new Set(str.toLowerCase()).size === str.length
}

// regex
// function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)
// }

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('ABA'))