/*
Input = a number
Output = that number with its digits reversed

Edge case - if the reversed number starts with one
or more zeros get rid of those zeros they don't count

Algorithm
- define a function reverseNumber that takes a number as an argument num
- declare a variable reversedDigitsArray that is the return value of converting
num to a string, splitting that string into digits, and reversing that array
- define a function removeZeros
  - if the first element in the array isn't a 0, return the array as is
  - if the first element in the array is a 0, iterate through the array with a for
  loop
  - if the current element is 0, delete it from the array with splice , splice(index, 1)
  - as soon as the element isn't a 0, break out of the loop
  - return the array
- declare a variable reversedDigitsNoZeros to the return value of removeZeros(reversedDigitsAray)
- join the reversedDIgitsNoZeros array with no space and then convert the string to a number and return it
*/

function removeZeros(array) {
  if (array[0] !== '0') return array;

  let firstIndexNoZero = 1;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] !== '0') {
      firstIndexNoZero = index;
      break;
    }
  }

  return array.slice(firstIndexNoZero);
}

function reverseNumber(num) {
  let reversedDigitsAray = String(num).split('').reverse();
  let zerosRemoved = removeZeros(reversedDigitsAray);
  return Number(zerosRemoved.join(''))
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
