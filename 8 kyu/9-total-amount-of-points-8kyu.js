function points(games) {
  let total = 0
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] == games[i][2]) {
      total += 1
    }
    if(games[i][0] > games[i][2]) {
      total += 3
    } else {
      total += 0
    }
  }
  return total
}

// const points= games =>games.reduce((acc, cur)=>{
//   return acc += (cur[0] > cur[2]) ? 3 : (cur[0]===cur[2]) ? 1 : 0;
// }, 0)

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))