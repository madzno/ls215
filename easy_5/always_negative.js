// function negative(num) {
//   if (num >= 0) {
//     return num * -1;
//   } else {
//     return num;
//   }
// }

// function negative(num) {
//   return Math.abs(num) * -1;
// }

function negative(num) {
  return num >= 0 ? num * -1 : num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
