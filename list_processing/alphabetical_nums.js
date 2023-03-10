/*
Input = an array
OUtput = an array sorted based on the english word for each of the
numbers in the array

numbers => english words => sort => back to numbers

Algorithm
- define a constant wordsToNumbers that is initialized to an object with
each of the word representation of the integers as keys and the corresponding number as value
- define a variable wordsArr to the return value of all of the numbers' words counterparts,
sorted
- declare a variable returnArr
- iterate through the wordsArr and look up the corresponding key's value in wordsToNumbers
and add that to returnArr
- return returnArr
*/

const wordsToNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
}

function alphabeticNumberSort(arr) {
  let wordsArr = Object.keys(wordsToNumbers).sort();
  return wordsArr.map(numString => wordsToNumbers[numString]);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
