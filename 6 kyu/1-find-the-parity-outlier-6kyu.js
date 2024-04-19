function findOutlier(integers){
  const odd = integers.filter(e => e % 2)
  const even = integers.filter(e => e % 2 == 0)

  return odd.length == 1 ? odd[0] : even[0]
}

// const findOutlier = integers => integers.filter(e => e % 2).length == 1 ? (integers.filter(e => e % 2)[0]) : (integers.filter(e => e % 2 == 0)[0])

// function findOutlier(integers){
//   const isEven = integers.filter(i => i%2).length === 1;
  
//   return integers.find(i => isEven ? i%2 : !(i%2))
// }

console.log(findOutlier([2, 4, 100, 4, 11, 2602, 36]))
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))