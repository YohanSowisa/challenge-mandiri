const invert = array => array.map(e => e < 0 ? Math.abs(e) : parseInt('-' + e))

// const invert = array => array.map(e => -e);

console.log(invert([1,-2,3,-4,5,6,-7]))