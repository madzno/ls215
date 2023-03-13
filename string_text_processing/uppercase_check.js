/*
Input = a string
Output = true or false

Rules
- return true if all the alphabetic characters in the string are uppercase
-return false if any of the alphabetic characters in the string are lowercase
- non alphabetic characters do not matter
- for empty strings, return true

Algorithm
- define a funciton isUpperCase with a parameter string
- declare a variable alphabeticString and initialize it to the return value of calling replace on the input string
and replacing any non-alphanumeric characters with an empty string
- split alphabeticString into an array of characters and call every on the array, in the callback function passed to every
  - call match and see if the current character matches a uppercase alphabetic character A-Z
- return the return value of every
*/

function isUppercase(string) {
  let alphabeticString = string.replace(/[^a-zA-Z]/g, '');
  for (let index = 0; index < alphabeticString.length; index += 1) {
    let currentLetter = alphabeticString[index];

    if (!currentLetter.match(/[A-Z]/g)) {
      return false;
    }
  }

  return true;
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
