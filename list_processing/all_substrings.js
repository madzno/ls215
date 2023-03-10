/*
Input = a string
Output = an array of the strings substrings

What is a substring
Index 0-1, 0-2, 0-3, 0-4, 0-5
Index 1-2, 1-3, 1-4, 1-5,
Index 2-3, 2-4, 2-5
Index 3-4, 3-5
Index 4-5

Algorithm
- declare a variable substringsArr and initialize it to an empty array
- initialize a for loop, in the for loop condition declare a variable
startingIdx that is initialized to 0, iterate while startingIdx is less than
the length of the string, add 1 to startingIdx
- initailize another for loop, in the loop condition declare a variable
endingIdx that is initialized to 1, iterate while endingIdex is less than or
equal to the length of the string, add 1 to ending index
- inside both for loops call substring on the string passed in as an argument
and pass startingIdx and endingIdx as arguments
- append the return value to the substrings array
- return the substrings array
*/

function substrings(string) {
  let substringsArr = [];

  for (let startingIdx = 0; startingIdx < string.length; startingIdx += 1) {
    for (let endingIdx = startingIdx + 1; endingIdx <= string.length; endingIdx += 1) {
      substringsArr.push(string.slice(startingIdx, endingIdx));
    }
  }

  return substringsArr;
}

console.log(substrings('abcde'));

// returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]
