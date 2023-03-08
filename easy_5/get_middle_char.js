/*
Input = a string
Output = the char(s) that are at the "middle" of the string

What is the middle?
"I Love JavaScript" - odd length
length (17) /  2 = 8.5
round down to 9, Math.floor, and return the element at that index

"Launch School" - odd length
length (13) / 2 = 6.5
round down to 7, Math.floor and return element at that index

"Launch" - even length
length (6) / 2 = 3
return element at that index and the index before it

"Launchschool"
length (12) / 2 = 6
return element at that index and the index before it

Algorithm
- define a function centerOf that takes a string as an argument
- if the length of the input string is odd,
  - divide the length by 2 and round it down using Math.floor
  - return the char at that index
- if the length of the input string is even,
  - divide the length by 2 and round it down using Math.floor
  - return the char at that index and the index before it

*/

function centerOf(string) {
  if (string.length % 2 === 1) {
    let middleIndex = Math.floor(string.length / 2);
    return string[middleIndex];
  } else {
    let middleIndex = string.length / 2;
    return string[middleIndex - 1] + string[middleIndex];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
