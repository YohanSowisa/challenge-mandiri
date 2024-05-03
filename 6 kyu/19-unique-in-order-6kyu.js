var uniqueInOrder = (iterable) => [...iterable].filter((e, i) => e != iterable[i + 1])

console.log(uniqueInOrder(('AAAABBBCCDAABBB')))