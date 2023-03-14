/*
Input = a string
output = a string with every other alphabetic character capitalized

Rules
- only alphabetic characters matter
- starts with uppercase

Algorithm
- define a function staggeredCase with a parameter string
- declare a variable currentCase to the string 'uppercase'
- declare a variable resultString to an empty string ''
- iterate through the string with a for loop
- if the current character is alphabetic and the currentCase is uppercase,
add the character toUpperCase to the resultString  and change the currentCase
to 'lowercase'
- if the current character is alphabetic and the currentCase is lowercase,
add the character toLowerCase to the resultString and change the currentCase
to 'uppercase'
- else, add the character as is to the resultString
*/

function staggeredCase(string) {
  let currentCase = 'uppercase';
  let resultString = '';

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    if (currentChar.match(/[A-Za-z]/) && currentCase === 'uppercase') {
      resultString += currentChar.toUpperCase();
      currentCase = 'lowercase';
    } else if (currentChar.match(/[A-Za-z]/) && currentCase === 'lowercase') {
      resultString += currentChar.toLowerCase();
      currentCase = 'uppercase';
    } else {
      resultString += currentChar;
    }
  }

  return resultString;
}

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");
