// Exercise: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// 1.	Declare an empty array;
const arr = [];
// 2.	Declare an array with more than 5 number of elements
const numArray = [1, 2, 3, 4, 5];
// 3.	Find the length of your array
console.log(numArray.length);
// 4.	Get the first item, the middle item and the last item of the array
console.log(numArray[0], numArray[2], numArray[4]);
// 5.	Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "Lagos", 10, "Laptop", null, undefined, false, 0];
console.log(mixedDataTypes.length);
// 6.	Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7.	Print the array using console.log()
console.log(itCompanies);
// 8.	Print the number of companies in the array
console.log(itCompanies.length);
// 9.	Print the first company, middle and last company
console.log(itCompanies[0]);
// 10.	Print out each company
console.log(itCompanies.join(", "));
// 11.	Change each company name to uppercase one by one and print them out
console.log(itCompanies.join(", ").toUpperCase());
// 12.	Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const itCompanies2 = "are big IT companies.";
console.log(itCompanies.join(", ").concat(" ", itCompanies2)); //is this method correct?
// 13.	Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyName = "Facebook";
itCompanies.includes(companyName) === true
  ? console.log(companyName)
  : console.log(companyName + " is not found!");
// 14.	Filter out companies which have more than one 'o' without the filter method
// console.log(itCompanies.filter('oo'))
const filterArray = itCompanies.forEach(function (item) {
  item.includes("oo") === true
    ? console.log(item, "contains oo")
    : console.log(item, "does not contain oo");
});
// const filterArray = itCompanies.forEach((item) => item.includes('oo') === true ? console.log(item, 'contains oo') : console.log(item, 'does not contain oo')
// );  //which is the better approach of doing things?
console.log(filterArray); //Why is this showing undefined ?
// 15.	Sort the array using sort() method
console.log(itCompanies.sort());
// 16.	Reverse the array using reverse() method
console.log(itCompanies.reverse());
// 17.	Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// 18.	Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));
// 19.	Slice out the middle IT company or companies from the array
console.log(itCompanies);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies.slice(3, 4));
// 20.	Remove the first IT company from the array
console.log(itCompanies.shift());
// 21.	Remove the middle IT company or companies from the array
console.log(itCompanies);
console.log(itCompanies.shift([Math.floor(itCompanies.length / 2)])); //I don't understand this?
// 22.	Remove the last IT company from the array
console.log(itCompanies.pop());
// 23.	Remove all IT companies
console.log(itCompanies.slice(0, 0)); //I don't undertand this too.
