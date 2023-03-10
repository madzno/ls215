/*
Input = an array of numbers
Output = a number that represents the sum of the sums of each leading sequence

Test cases - what is a leading sequence?
[3, 5, 2]
index 0
index 0 + index 1
index 0 + index 1 + index 2

Algorithm
- define a function sumOfSums with one parameter, arr
- declare a variable sequenceSums and initialize it to an empty array
- iterate through arr with forEach with three arguments - the current num, index, and numArray
- declare a variable sequence and initialize it to calling slice from index 0 to the current
array index
- sum up the numbers in sequence using reduce and push this to the sequenceSums array
- return the sum of sequenceSums


*/

function sumOfSums(arr) {
  let sequenceSums = [];

  arr.forEach((num, index, numArray) => {
    let sequence = numArray.slice(0, index + 1);
    let sumOfSequence = sequence.reduce((totalSum, currentNum) => totalSum + currentNum);
    sequenceSums.push(sumOfSequence);
  });

  return sequenceSums.reduce((finalSum, currentSum) => finalSum + currentSum);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
