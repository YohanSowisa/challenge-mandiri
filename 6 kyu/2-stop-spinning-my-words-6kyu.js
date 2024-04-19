function spinWords(string){
  const spinned = string.split(' ')

  for (let i = 0; i < spinned.length; i++) {
    if (spinned[i].length >= 5) {
      spinned[i] = spinned[i].split('').reverse().join('')
    }
  }

  return spinned.join(' ')
}

console.log(spinWords('Agus Herman'))

// NTAR KALO UDH JAGO DITELUSURI LAGI !!!