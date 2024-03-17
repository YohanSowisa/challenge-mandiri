function alphabet(ns) {
  let sorted = ns.sort((a, b) => a - b)
  console.log(sorted)

  for (let i = 2; i < sorted.length; i++) {
    if (sorted[i] == sorted[0] * sorted[1]) {
      [sorted[i], sorted[4]] = [sorted[4], sorted[i]]
    }
  }
  if (sorted[2] > sorted[3]) {
    [sorted[2], sorted[3]] = [sorted[3], sorted[2]]
  }
  for (let i = 3; i < sorted.length; i++) {
    if (sorted[i] == sorted[1] * sorted[2]) {
      [sorted[i], sorted[5]] = [sorted[5], sorted[i]]
    }
  }
  for (let i = 4; i < sorted.length; i++) {
    if (sorted[i] == sorted[2] * sorted[3]) {
      [sorted[i], sorted[6]] = [sorted[6], sorted[i]]
    }
  }

  return sorted[3]
}

// function alphabet(ns) {
//   let sorted = ns.sort((a,b) => a - b)
//   return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
// }

console.log(alphabet([2,3,4,1,12,6,2,4]))