function accum(s) {
	return s.split('').map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join('-');
}

// function accum(s) {
// 	return s.split('').map((e, i) => e.toUpperCase() + Array(i + 1).join(e.toLowerCase())).join('-');
// }

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))