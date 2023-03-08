/*
Input = a string
Output = a string with the last name first a comma and a space

Algorithm
- split the input string into an array based on whitespace, reverse the array
- join the array with ', ' and return that string
*/

// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapName(name) {
  let namesArrayReversed = name.split(' ').reverse();
  let [lastName, ...firstNames] = namesArrayReversed;

  return lastName + ', ' + firstNames.reverse().join(' ');
}

console.log(swapName('Hannah Ann Smith')); // "Smith, Hannah Ann"
