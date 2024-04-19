const yearDays = year => (year % 4 !== 0) ? `${year} has 365 days` : `${year} has 366 days`

console.log(yearDays(2023))

// https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript