function solution(str, ending){
  return str.slice(-ending.length) === ending ? true : ending === '' ? true : false
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
console.log(solution('samurai', 'ai'))
console.log(solution('abc', ''))