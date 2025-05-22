let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let exampleTwotWord = word4.substring(4, 14);
let exampleThirdWord = word4.substring(15, 17);
let exampleFourWord = word4.substring(18, 20);
let exampleFiveWord = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let twoWordLength = exampleTwotWord.length;
let thirdWordLength = exampleThirdWord.length;
let FourWordLength = exampleFourWord.length;
let fifthWordLength = exampleFiveWord.length;

console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);
console.log("Two Word: " + exampleTwotWord + ", with length: " + twoWordLength);

console.log(
  "Third Word: " + exampleThirdWord + ", with length: " + thirdWordLength
);
console.log(
  "Four Word: " + exampleFourWord + ", with length: " + FourWordLength
);
console.log(
  "Fifth Word: " + exampleFiveWord + ", with length: " + fifthWordLength
);
