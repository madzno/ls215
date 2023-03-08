/*
Input = a string
Output = that string with any words with five or more characters
reversed

Algorithem
- define a function reverseWords that takes a string as an argument
- split the string into words (based on white space) initialize this to a variable wordsArr
- iterate through wordsArr
 - if the current word is greater than or equal to 5 in length,
  - split the word into characters, reverse those characters, and re-join the word into a word
- if the current word is not, leave as is

*/

function reverseWords(string) {
  let wordsArr = string.split(' ');
  let reversedWords = wordsArr.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
