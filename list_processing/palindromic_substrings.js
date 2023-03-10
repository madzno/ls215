/*
Input = a string
Output = an array of all substrings of the input string that are palindromes

What is a palindrome?
- same sequence of characters forward and backwards
- case does matter 'AbcA` is a palindrome but `Abcba` is not
- single characters are not palindromes

Algorithm
- define a function palindromes with one parameter string
- declare a variable palindromesArr to an empty array
- get all of the palindromes of the string with the substrings function,
declare a variable allSubstrings and initialize it to the return value of substrings
- filter out any single letter substrings (NOT palindromes)
- iterate through the allSubstrings array for each string in the array determine if it is a palindrome:
  - isPalindrome function
      - split the input string into an array of characters using split, store the return
      value in a variable forwards
      - declare a variable backwards and initialize it to forwards, called with slice() to return
      a copy and then the reverse() method
      - iterate through forwards with a for loop, if at any point the current character at the current
      index is NOT the same character at the current index in backwards, return false
      - if all characters are the same at all indexes return true
- pass the string to the isPalindrome funciton, if isPalindrome returns true add the string
to the palindromesArr
- return the palindromesArr
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

function isPalindrome(string) {
  let forwards = string.split('');
  let backwards = forwards.slice().reverse();

  for (let index = 0; index < forwards.length; index += 1) {
    if (forwards[index] !== backwards[index]) {
      return false;
    }
  }

  return true;
}

function palindromes(string) {
  let palindromesArr = [];
  let allSubstrings = substrings(string).filter(substr => substr.length > 1);

  allSubstrings.forEach(str => {
    if (isPalindrome(str)) {
      palindromesArr.push(str);
    }
  });

  return palindromesArr;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// ["ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo"]

console.log(palindromes('knitting cassettes'));
// returns
// ["nittin", "itti", "tt", "ss", "settes", "ette", "tt"]
