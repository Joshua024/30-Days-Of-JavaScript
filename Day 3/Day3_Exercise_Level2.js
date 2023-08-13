const base = prompt('Enter the base:')
const height = prompt('Enter the height:')
let area = 0.5 * base * height
console.log(area);

let yearI = prompt('Enter birth year: ')

function convertYears2Seconds(year){
  let convertedYear = year * 60 * 60
  console.log(convertedYear + 'seconds');
}
convertYears2Seconds(yearI)