/*
Input = an id representing an item id and a array of nested
object containing transaction history
Output = a boolean true or false

Rules
return true if the items quantity is greater than 0, false if equal or less than
movement "in" adds to quantity, movement "out" subtracts from quantity

Algorithm
- define a function isItemAvailable that takes two arguments an itemId and a
transactionArr
- declare a variable itemsTransactions that is initialized to the return value
of calling transactionsFor and passing itemId as an argument
- declare a variable totalQuantity and initialize it to 0
- iterate through itemsTransactions, if the value of movmeent is "in" add
the value of quantity to totalQuantity
- if the value of movement is "out" subtract the value of quanitty to totalQuantity
- if the totalQuantity is greater than 0, return true, otherwise return false
*/

function transactionsFor(itemId, arr) {
  return arr.filter(obj => obj.id === itemId);
}

function isItemAvailable(itemId, transactionsArr) {
  let itemsTransactions = transactionsFor(itemId, transactionsArr);
  let totalQuantity = 0;

  itemsTransactions.forEach(obj => {
    if (obj.movement === 'in') {
      totalQuantity += obj.quantity;
    } else {
      totalQuantity -= obj.quantity;
    }
  });

  return totalQuantity > 0;
}

const transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 15 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
