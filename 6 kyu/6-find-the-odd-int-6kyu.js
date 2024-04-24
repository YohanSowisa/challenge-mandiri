function findOdd(A) {
  var obj = {};

  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(let prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// function findOdd(arr) {
//   return arr.find(item => arr.filter(el => el == item).length % 2)
// }

console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1, 1, 2]))
console.log(findOdd([0, 1, 0, 1, 0]))

// NYONTEK YANG INI