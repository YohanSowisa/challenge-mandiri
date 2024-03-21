const findShort = s => Math.min(...s.split(' ').map(e => e.length))

// const findShort = s => Math.min.apply(null, s.split(' ').map(w => w.length))

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
console.log(findShort('turns out random test cases are easier than writing out basic ones'))
console.log(findShort('Let\'s travel abroad shall we'))