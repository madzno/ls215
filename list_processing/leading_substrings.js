function leadingSubstrings(string) {
  let substrings = [];
  for (let endingIndx = 1; endingIndx <= string.length; endingIndx += 1) {
    substrings.push(string.slice(0, endingIndx));
  }

  return substrings;
}


// function leadingSubstrings(string) {
//   let substrings = [];

//   string.split('').forEach((char, index, stringsArr) => {
//     let currentSubstring = stringsArr.slice(0, index + 1).join('');
//     substrings.push(currentSubstring);
//   });

//   return substrings;
// }

// function leadingSubstrings(string) {
//   return string.split('').map((char, index, charArray) => {
//     return charArray.slice(0, index + 1).join('');
//   });
// }

// function leadingSubstrings(string) {
//   let substrings = [];

//   string.split('').reduce(((accumulator, currentString) => {
//     substrings.push(accumulator + currentString);
//     return accumulator + currentString;
//   }), '');

//   return substrings;
// }

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
