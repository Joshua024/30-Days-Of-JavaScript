const challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.length);
const upperCaseChallenge = challenge.toUpperCase()
console.log(upperCaseChallenge);
const lowerCaseChallenge = challenge.toLocaleLowerCase()
const sliceChallenge1 = challenge.substring(3,21);
console.log(sliceChallenge1);
const sliceChallenge2 = challenge.substr(3, 21)
console.log(sliceChallenge2);
const includesChallenge = challenge.includes('Script')
console.log(includesChallenge);
const splitChallenge1 = challenge.split()
console.log(splitChallenge1);
const splitChallenge2 = challenge.split(' ')
console.log(splitChallenge2);
const techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const splitTechCompanies = techCompanies.split(',')
console.log(splitTechCompanies);
const replaceChallenge = challenge.replace('30 Days Of Python') /*Issue */
console.log(replaceChallenge);
const charAtChallenge = challenge.charAt(15)
console.log(charAtChallenge);
const charCodeAtChallenge = challenge.charCodeAt('J')
console.log(charCodeAtChallenge);
const indexOfChallenge = challenge.indexOf('a')
console.log(indexOfChallenge);
const lastIndexOfChallenge = challenge.lastIndexOf('a')
console.log(lastIndexOfChallenge);
const because = 'You cannot end a sentence with because because because is a conjunction'
const indexOfBecause = because.indexOf('because')
console.log(indexOfBecause);
const searchBecause = because.search('because')
console.log(searchBecause);
const newChallenge = ' 30 Days Of JavaScript '
const trimNewChallenge = newChallenge.trim()
console.log(newChallenge);   
console.log(trimNewChallenge);
const startsWithChallenge = challenge.startsWith('30 Days Of JavaScript')
console.log(startsWithChallenge);
const endsWithChallenge = challenge.endsWith('30 Days Of JavaScript')
console.log(endsWithChallenge);
const matchChallenge = challenge.matchAll('a')
console.log(matchChallenge);
const concatChallenge1 = '30 Days of'
const concatChallenge2 = 'JavaScript'
const concatChallenge3 = concatChallenge1.concat( ' ',concatChallenge2)
console.log(concatChallenge3);
const repeatChallenge = challenge.repeat(2)
console.log(repeatChallenge);
