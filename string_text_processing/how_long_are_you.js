/*
Input = a string
Output = an array with strings, the current word concatenated with the length

Rules
- if no argument or if an empty string is passed, return value is an empty array
- words are separated by a single space

Algorithm
- define a function wordLengths with a parameter string, define string's default
value to be an empty string
- if string is an empty string, return an empty array
- declare a variable wordsArr and initialize it to the return value of splitting th
string by a single space
- return the return value of calling map on the WordsArr, for each word transform
it to the word + ' ' + word.length

*/

function wordLengths(string = '') {
  if (string === '') return [];

  let wordsArr = string.split(' ');
  return wordsArr.map(word => word + ' ' + word.length);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
