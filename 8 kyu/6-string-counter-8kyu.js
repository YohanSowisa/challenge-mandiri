function strCount(str, letter){  
  var spread = [...str].filter(e => e == letter)

  return spread.length
}

// function strCount(str, letter){  
  // return str.split(letter).length - 1

  // 'Helllo'.split('l') ==> 'He', '', '', 'o'; Karena 'Hel..l..lo'
// }

// function strCount(str, letter){  
//   return str.split('').filter(c => c == letter).length;
// }

console.log(strCount('Hello', 'l'))