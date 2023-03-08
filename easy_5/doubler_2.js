/*
Algorithm
- create a helper function isConsonant
- isConsonant take the current character
- if the char matches /[aeiouAEIOU]/ return false
- if the char matches /[^a-zA-Z]/ return false
- otherwise return true
*/

function isConsonant(char) {
  if (char.match(/[^a-zA-Z]/g)) {
    return false;
  } else if (char.match(/[aeiouAEIOU]/g)) {
    return false;
  } else {
    return true;
  }
}

function doubleConsonants(string) {
  let doublerString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (isConsonant(string[index])) {
      doublerString = doublerString + string[index] + string[index];
    } else {
      doublerString += string[index];
    }
  }

  return doublerString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
