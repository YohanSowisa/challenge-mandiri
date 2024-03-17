const cubeChecker= (volume, side) => ((volume === side * side * side) && (side > 0)) ? true : false

// const cubeChecker = (volume, side) => Math.pow(side, 3) === volume && side > 0

console.log(cubeChecker(125, 5))
