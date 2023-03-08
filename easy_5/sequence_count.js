/*
Input = two numbers, one that represents a count of integers in
the array and another that represents the starting number for a sequence
Output = an array with x amount of numbers in sequence

Test cases
[1, 2, 3, 4, 5]
[1 *1, 1*2, 1*3, 1*4, 1*5]
index + 1

[-7, -14, -21, -28]
[-7*1, -7*2, -7*3, -7*4]
index + 1

Algorithm
-define a function sequence with two parameters count and startingNum
- declare and initialize a variable sequence to an empty array
- start a for loop, initialize a variable index to 0, iterate while index is less
than count, add 1 to index
- push the startingNum multipled by the current index + 1 to the sequence array
- return the sequence array
*/

function sequence(count, multiplesNum) {
  let sequence = [];

  for (let index = 0; index < count; index += 1) {
    sequence.push(multiplesNum * (index + 1));
  }

  return sequence;
}


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
