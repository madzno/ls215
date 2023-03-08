/*
Input = a string that represents an octal (base 8) number
Output = a number that is the base 10 version of that number

Rules
10
1*(8^1) + 0*(8^0)
8 + 0
8

2047
7*(8^0) + 4*(8^1) + 0*(8^2) + 2*(8^3)
7*1 + 4*8 + 0*64 + 2*512
7 + 32 + 0 + 1024
1063

Algorithm
- define a function octalToDecimal with one parameter numberStrign
- split the string into an array of individual digits and initialize
this to digits
- reverse the digits array
- transform the digits array into an array of numbers
- iterate through the digits array by index, for each number:
  - multiply it by Math.pow(8, currentIndex)
  - transform the array into these values
- sum the numbers in the array using reduce and return the sum
*/


function octalToDecimal(numberString) {
  let stringDigits = numberString.split('').reverse();
  let numDigits = stringDigits.map(num => Number(num));

  let decimalNumbers = numDigits.map((num, index) => {
    return num * (Math.pow(8, index));
  });

  return decimalNumbers.reduce((sum, num) => sum + num);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
