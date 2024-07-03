function sortArray(array) {
  const odd = array.filter((e) => e % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([5, 3, 2, 8, 1, ]))
console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArray([]))