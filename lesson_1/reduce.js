function myReduce(array, func, initial) {
  let accumulator = (initial ? initial : array[0]);

  for (let index = 0; index < array.length; index += 1) {
    let currentElement = array[index];

    accumulator = func(accumulator, currentElement);
  }

  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
