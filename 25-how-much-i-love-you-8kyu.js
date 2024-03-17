function howMuchILoveYou(nbPetals) {
  const lines = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return lines[nbPetals % 6 === 0 ? 5 : nbPetals % 6 - 1]
}

// const howMuchILoveYou= n => ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][n % 6]

console.log(howMuchILoveYou(354))
