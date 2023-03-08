/*
Input = a number
Output = an array of numbers from 1 until that number (inclusive)

Algorithm
- declare a variable sequence and initilaize it to an empty array
- initialize a for loop with a counter variable set to 1, iterate until
counter is greater than the input num, and add 1 to counter
- push each value of counter to the sequence array
- return the sequence array

*/

function sequence(num) {
  let sequence = [];

  for (let counter = 1; counter <= num; counter += 1) {
    sequence.push(counter);
  }

  return sequence;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
