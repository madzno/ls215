function myMap(array, func) {
  let transformedArray = [];

  array.forEach(value => {
    transformedArray.push(func(value));
  });

  return transformedArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
