function highAndLow(numbers){
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))