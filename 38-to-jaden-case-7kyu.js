String.prototype.toJadenCase = function () {
  return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
}

// CARI TAHU CARA PANGGILNYA
console.log("How can mirrors be real if our eyes aren't real".toJadenCase())