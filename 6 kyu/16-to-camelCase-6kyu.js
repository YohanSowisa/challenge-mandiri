function toCamelCase(str){
  str = str.replace(/[_-]/g, ' ').split(' ')
  return str.map((e, i) => i > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e).join('')
}

console.log(toCamelCase('the_stealth_warrior'))
console.log(toCamelCase('The-Stealth-Warrior'))
console.log(toCamelCase('A-B-C'))
console.log(toCamelCase('ThePippi_Was-Pippi'))