function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

// function nbYear(p0, percent, aug, p) {
//   var yr = 0;
//   while (p0 < p) {
//     p0 = Math.floor((1 + percent / 100) * p0 + aug);
//     yr++
//   } 
//   return yr;
// }

console.log(nbYear(1000, 2, 50, 1200))

// BELAJAR LAGI