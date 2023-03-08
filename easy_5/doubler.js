/*
Input = a string
Output = a new string with each letter doubled

Edge case - empty string returns an empty string

Algorithm
- define a function repeater with one parameter string
- initialize a variable doublerString to an empty string
- iterate through the input string, for each character add it
twice to the doublerString
- return the doublerstring
*/

function repeater(string) {
  let doublerString = '';

  for (let index = 0; index < string.length; index += 1) {
    doublerString = doublerString + string[index] + string[index];
  }

  return doublerString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
