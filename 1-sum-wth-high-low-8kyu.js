function sumArray(array) {
  if (!array || array.length < 3) return 0
  else return array.sort((a,b) => a - b).slice(1, (array.length - 1)).reduce((acu, cur) => acu + cur)
}

// sumArray = array => array ? array.sort((a,b) => a - b).slice(1, -1).reduce((acc,cur) => acc + cur) : 0

console.log(sumArray([6,2,1,8,10]))