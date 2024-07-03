function solution(str){
  let i = 0
  let res = []

  if (str.length % 2 !== 0) {
    str += '_'
  }
  while (i < str.length) {
    res.push(str[i] + str[i + 1])
    i += 2
  }

  return res
}

// function solution(str){
//   return str.split('').map((e,i) => i % 2 === 0 ? e + (str[i+1] || "_") : false).filter(e => e)
// }

// function solution(s){
//   return (s+"_").match(/.{2}/g)||[]
// }

// const solution = str => ((str+"_").match(/../g)||[]);

console.log(solution('abcdef'))
console.log(solution('abcdefg'))