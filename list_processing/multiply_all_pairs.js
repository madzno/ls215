/*
Input = two arrays
Output = one array of all the possible combination of products between
the two arrays

Algorithm
- declare a variable products and initialize it to an empty array
- iterate through the first array with forEach and pass a funciton with an argument num1
- iterate through the second array with forEach and pass a function with an argument num2
- append to products the return value of num1 * num2
*/

function multiplyAllPairs(arr1, arr2) {
  let products = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      products.push(num1 * num2);
    });
  });

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
