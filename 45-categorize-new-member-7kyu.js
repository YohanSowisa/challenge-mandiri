const openOrSenior = (data) => data.map(e => (e[0] >= 55 && e[1] > 7) ? 'Senior' : 'Open')

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))