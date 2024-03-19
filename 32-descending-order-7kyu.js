function descendingOrder(...n){
  return parseInt(n.join('').split('').sort((a, b) => b - a).map(e => +e).join(''))
}

console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))