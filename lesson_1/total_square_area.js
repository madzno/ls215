/*
Input = an array of arrays
Output = a single number representing the total area of all rectangles

Algorithm  1
1. first, multiply the two values in the samller arrays by each other, transformint
them into single values
2. then iterate through that single array with reduce and sum up all of numbers

*/

function totalArea(array) {
  let rectangleAreas = array.map(([num1, num2]) => num1 * num2)
  return rectangleAreas.reduce((total, currentArea) => total + currentArea);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

function totalSquareArea(array) {
  let squares = array.filter(([num1, num2]) => num1 === num2)
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
