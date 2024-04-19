function isAllPossibilities(x){
	return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}

// const isAllPossibilities = (x) => {
//   x = x.sort((a, b) => a - b);

//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== i) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(isAllPossibilities([0,1,2,3]))
console.log(isAllPossibilities([1,2,3,4]))
console.log(isAllPossibilities([0]))
console.log(isAllPossibilities([0,0,1]))