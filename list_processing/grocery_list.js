/*
Algorithm
- define a function buyFruit that takes a multidimensional array as an argument
- declare a variable listArr and initialize it to an empty array []
- iterate through the parameter arr and for each inner arr pass it as [fruit, quantity]
to the function following forEach
  - start a while loop, the condition is while quanitity is greater than 0, append
  the fruit to listArr and subtract 1 from quantity
- return listArr
*/

function buyFruit(arr) {
  let listArr = [];

  arr.forEach(([fruit, quantity]) => {
    while (quantity > 0) {
      listArr.push(fruit);
      quantity -= 1;
    }
  });

  return listArr;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
