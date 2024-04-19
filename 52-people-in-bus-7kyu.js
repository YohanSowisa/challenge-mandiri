var number = function(busStops){
  let total = 0

  for (let i = 0; i < busStops.length; i++) {
    total += busStops[i][0]
    total -= busStops[i][1]
  }
  
  return total
}

// const number = (busStops) => busStops.reduce((acc, [on, off]) => acc + on - off, 0);

// var number = function(busStops){
// 	var totalPeople = 0;
//   for (var i=0; i<busStops.length; i++) {
//     totalPeople += busStops[i][0];
//     totalPeople -= busStops[i][1];
//   }
//   return totalPeople;
// }

console.log(number([[10,0],[3,5],[5,8]]))
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))