/*
Input = an string and an array of words
Output = an array of the words in the input words
that are anagrams

What is an anagram?
a word that has the same characters as the string it is being
compared to and the same number of those characters

Algorithm
- define a function isAnagram that takes the targetWord and currentWord
- split the input word into an array of letters and sort them, store this in
a variable firstWord
- split the second word into an array of letters and sort them, store this
in a variable secondWord
- iterate through the first word with index compare each letter with the
letter in the same position in the second word , return false if any letter
is not the same
- return true if all the letters were the same

- define a function anagram that takes an input word and an array list
- declare a variable anagrams to an empty array
- iterate through the list of words and pass each word to isAnagram function
- if isAnagram returns true, add the current word to anagrams, if it
returns false, don't add it to anagrams
- return anagrams array

*/

function anagram(word, list) {
  let anagrams = list.filter(currentWord => isAnagram(word, currentWord));

  return anagrams;
}

function isAnagram(word1, word2) {
  let targetWord = word1.split('').sort();
  let currentWord = word2.split('').sort();

  for (let index = 0; index < targetWord.length; index += 1) {
    if (targetWord[index] !== currentWord[index]) {
      return false;
    }
  }

  return true;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
