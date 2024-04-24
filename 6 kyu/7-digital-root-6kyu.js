function digitalRoot(n) {
  while(n > 9) {
    let num = String(n).split('').map(e => +e).reduce((a, c) => a + c, 0)
    n = num
  }

  return n
}

function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}

console.log(digitalRoot(16))
console.log(digitalRoot(456))