function getCount(str) {
  return str.split('').filter(e => e.includes('a') || e.includes('e') || e.includes('i') || e.includes('o') || e.includes('u')).length
}

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// function getCount(str) {
  // return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

console.log(getCount('abracadabra'))