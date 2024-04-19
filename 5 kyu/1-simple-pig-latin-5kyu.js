function pigIt(str){
  let arr = []
  let strArr = str.split(' ')
  strArr.forEach(e => {
    let wordArr = e.split('')
    wordArr.push(wordArr[0], 'ay'), wordArr.shift()

    if (e === '!' || e === '.' || e === '?') {
      arr.push(e)
    } else {
      arr.push(wordArr.join(''))
    }
  })
  return arr.join(' ')
}

// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }

// function pigIt(str){
//   return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
// }

// function pigIt(str){
//   return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")
// }

console.log(pigIt('Hello World !'))