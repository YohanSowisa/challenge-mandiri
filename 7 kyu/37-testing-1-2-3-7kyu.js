var number = function(array){
  return array.map((e, i) => `${++i}: ${e}`)
}

console.log(number(['a', 'b', 'c']))