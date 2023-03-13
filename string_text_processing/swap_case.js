function swapCase(string) {
  let returnString = '';
  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    if (currentChar.match(/[A-Z]/)) {
      returnString += currentChar.toLowerCase();
    } else if (currentChar.match(/[a-z]/)) {
      returnString += currentChar.toUpperCase();
    } else {
      returnString += currentChar;
    }
  }

  return returnString;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
