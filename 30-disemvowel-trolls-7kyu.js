const disemvowel = str => str.split('').map(e => 'aiueoAIUEO'.includes(e) ? e.replace(e, '') : e).join('');

// regex
// const disemvowel = str => str.replace(/[aeiou]/gi, '');

console.log(disemvowel('This website is for losers LOL!'))