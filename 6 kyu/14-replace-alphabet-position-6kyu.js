// function alphabetPosition(text) {
//   text = text.toLowerCase()
//   let pos = 'abcdefghijklmnopqrstuvwxyz'.split('')

//   return text.split('').map(e => String(pos.indexOf(e) + 1)).join(' ')
// }

// function alphabetPosition(text) {
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return text.toLowerCase().split('')
//   .filter( letter => {
//     let index = alphabet.indexOf(letter);
//     return index > -1;
//   }  )
//   .map( letter => alphabet.indexOf(letter) + 1 )
//   .join(' ')
// }

function alphabetPosition(text) {
  return [...text.replace(/[^a-z]/gi, '').toLowerCase()].map(e => e.charCodeAt() - 96).join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// NYONTEK