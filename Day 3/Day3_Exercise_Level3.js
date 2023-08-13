const now = new Date()
const day = now.getDay() +1
const twoDigitDay = day.toString().padStart(2, '0')
const month = now.getMonth() +1
const twoDigitMonth = month.toString().padStart(2, '0')
const year = now.getFullYear()
const hour = now.getHours()
const twoDigitHour = hour.toString().padStart(2, '0')
const minutes = now.getMinutes()
const twoDigitMinutes = minutes.toString().padStart(2, '0')
const time = now.getTime()

console.log(day);
console.log(`${year}-${twoDigitMonth}-${twoDigitDay} ${twoDigitHour}:${twoDigitMinutes}`);
console.log(`${twoDigitDay}-${twoDigitMonth}-${year} ${twoDigitHour}:${twoDigitMinutes}`);
console.log(`${twoDigitDay}/${twoDigitMonth}/${year} ${twoDigitHour}:${twoDigitMinutes}`);

let num8 = 19
let num9 = num8.toString().padStart(4, '0')
let num10 = Number(num9)
console.log(num9);