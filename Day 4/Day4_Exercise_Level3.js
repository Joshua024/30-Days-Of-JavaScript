function getDaysInMonth(monthNumber){
    if(monthNumber < 1 || monthNumber > 12){
        return 'Invalid month number'
    }

    const daysInMonth = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]
    
    return daysInMonth[monthNumber -1] 
}

function monthsInYear(monthNumber){
    if(monthNumber < 1 || monthNumber > 12){
        return 'Invalid month number'
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[monthNumber - 1]
}

const monthNumber = 1
const days = getDaysInMonth(monthNumber)
const month = monthsInYear(monthNumber)

if(typeof days === 'number'){
    console.log(`Number of days in month ${month} is ${days} days`);
} else {
    console.log(days);
}