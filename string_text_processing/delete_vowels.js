/*
Input = an array of strings
OUtput = an array with the same strings but all vowels removed

Rules
- both uppercase and lowercase vowels are removed

Algorithm
- define a funciton removeVowels with one parameter StringsArr
- iterate through stringsArr with map, return from the callback to map the return value of calling
replace on the current string and replacing all instances of both uppercase and lowercase vowels
[aeiouAEIOU]/g with an empty string
- return the return value of map
*/

function removeVowels(stringsArr) {
  return stringsArr.map(string => string.replace(/[aeiouAEIOU]/g, ''));
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwyx"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ['grn', 'YLLW', 'blck', 'wht']
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ['BC', '', 'XYZ]
