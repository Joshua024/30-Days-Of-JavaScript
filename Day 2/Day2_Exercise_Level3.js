const countLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(countLove.includes('love'));

// function WordCount(str) {
//     var totalSoFar = 0;
//     for (var i = 0; i < WordCount.length; i++)
//       if (str[i] === " ") { // if a space is found in str
//         totalSoFar = +1; // add 1 to total so far
//     }
//     totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
//   }
  
//   console.log(WordCount("Random String"));

// function countWords(str){
//     let num = 0;
//     for(let i =0; i < str.length; i++){
//         let currentChar = str[i]

//         if (currentChar !== " "){
//             num += 1
//         }
//     }
//     num = num + 1

//     console.log(num);
// }
// countWords('love love love love')

const sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

function countOccurrences(targetWord, sentence) {
  const regex = new RegExp(`\\b${targetWord}\\b`, "gi");
  const matches = sentence.match(regex);
  return matches ? matches.length : 0;
}

const wordToFind = "love";
const occurrences = countOccurrences(wordToFind, sentence);

console.log(`The word "${wordToFind}" occurred ${occurrences} times in the sentence.`);
