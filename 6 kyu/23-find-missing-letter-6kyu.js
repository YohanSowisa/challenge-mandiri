const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])) // e
console.log(findMissingLetter(['o', 'o', 'q', 'r', 's'])) //P