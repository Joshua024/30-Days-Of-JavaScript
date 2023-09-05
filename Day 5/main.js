import countries from "./countries.js";
import webTechs from "./web_techs.js.js";

// Exercise: Level 2
// 1.	Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// done
// 2.	First remove all the punctuations and change the string to array and count the number of words in the array
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// console.log(words)
// console.log(words.length)
// console.log(text.join())
console.log(text);
const removeCommaText = text.replaceAll(",", "");
const removeFullStopText = removeCommaText.replaceAll(".", "");
console.log(removeFullStopText);
const newArray = removeFullStopText.split();
console.log(newArray);
console.log(newArray.length); // i don't understand
// 3.	In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// o	add 'Meat' in the beginning of your shopping cart if it has not been already added
// o	add Sugar at the end of you shopping cart if it has not been already added
// o	remove 'Honey' if you are allergic to honey
// o	modify Tea to 'Green Tea'
// 4.	In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countryName = "Ethiopia";
countries.includes(countryName) === true
  ? console.log(countryName)
  : countries.push(countryName);
console.log(countries);
// 5.	In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webStack = "Saas";
webTechs.includes(webStack) === true
  ? console.log("Sass is a CSS preprocess")
  : webTechs.push(webStack);
console.log(webTechs);
// 6.	Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
