console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to 'help' one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

const num = 10
const string = '10'
if (typeof num === typeof string){
    console.log('They are not equal', num, 'is ', typeof num, 'and', string, 'is', typeof string);
} else{
    console.log(parseInt(string));
}

const checkFloat = parseFloat('9.8')
 const checkFloat2 = Math.ceil(checkFloat)
console.log(checkFloat2);

const var1 = 'python'
const var2 = 'jargon'
const concatVar = var1 +" " + var2
console.log(concatVar.includes('on')); 
console.log(var1.includes('on'));
console.log(var2.includes('on'));
const sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'));
let randomNum = Math.floor(Math.random() * 100) 
console.log(randomNum);
let num50To100 = Math.floor(Math.random() *(100 - 50 + 1)) + 50
console.log(num50To100);
let num255 = Math.floor(Math.random() *255)
console.log(num255);
console.log("hello, Hello");
const because = 'You cannot end a sentence with because because because is a conjunction'
const sliceBecause = because.substring(0, 30) + '' + because.substring(54, 70)
console.log(sliceBecause);