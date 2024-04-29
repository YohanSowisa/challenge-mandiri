function isValidWalk(walk) {
  return walk.length == 10 && !walk.reduce((a, c) => a + {'n': 1, 'e': 2, 's': -1, 'w': -2}[c], 0)
}

// function isValidWalk(walk) {
//   let x = 0
//   let y = 0

//   for (let i  of walk) {
//     switch (i) {
//       case 'n': y++; break
//       case 's': y--; break
//       case 'w': x++; break
//       case 'e': x--; break
//     }
//   }

//   return walk.length === 10 && x === 0 && y === 0
// }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))

// NYONTEK