/*
Input = a string
Output = a string with all words capitalized

What is a word?
Any sequence of non-whitespace characters, words don't have to start
with alphabetic characters i.e "quoted"

Algorithm
- define a function wordCap that takes a string as an argument
- split the string on whitespace  and initialize that to a variable WordsArr
- iterate through WordsArr with map and for each string, return the first character of the
string uppercased  concatenated with the rest of the string after index 1
- join the wordsArr with whitespace and return it
*/

function wordCap(string) {
  let wordsArr = string.split(' ');
  return wordsArr.map(currentString => {
    return currentString[0].toUpperCase() + currentString.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
