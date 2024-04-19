function multiply(number) {
  if (number < 0) {
    return number * Math.pow(5, number.toString().length - 1)
  } else {
    return number * Math.pow(5, number.toString().length)
  }

  // return (number < 0) ? number * Math.pow(5, String(number).length - 1) : number * Math.pow(5, String(number).length)
}

// function multiply(number) {
//   return number * Math.pow(5, Math.abs(number).toString().length)
// }

// function multiply(number){
//   let numStr = number.toString().replace("-", "")
//   return number* Math.pow(5,numStr.length)
// }

console.log(multiply(-2))