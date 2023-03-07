function getMinandMax(array) {
  let min = Infinity;
  let max = -Infinity;

  array.forEach(value => {
    if (value <= min) {
      min = value;
    }

    if (value >= max) {
      max = value;
    }
  });

  return [min, max];
}

let minAndMaxArray = getMinandMax([4, 5, 12, 23, 3]);
let otherMinAndMax = getMinandMax([5]);

console.log(minAndMaxArray);
console.log(otherMinAndMax);
