function filter_list(l) {
  return l.filter(e => typeof e == 'number')
  // return l.filter(e => Number.isInteger(e));
}

console.log(filter_list([1,'a','b',0,15]))