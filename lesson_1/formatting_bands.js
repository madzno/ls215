/*
Input = an array of objects
Output = an array of objects with all of the countries as `Canada`
and with the band name as all capitalized strings

Algorithm
1. iterate through the input array with map
2. access the value of name in the current object, split name
into an array based on whitespace, transform each word in this
array with the first letter capitalized + the rest of the word (splice(1)),
join it back into a string
3. access the value of country and set it as Canada
4. leave active alone
5. return the transformed array
*/


let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBandName(name) {
  let nameWords = name.split(' ');

  let capitalizedName = nameWords.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');

  let nameWithoutDots = capitalizedName.replace(/\./g, '');
  return nameWithoutDots;

}

function processBands(data) {
  return data.map(object => {
    let newBandName = processBandName(object.name);
    return { name: newBandName, country: 'Canada', active: object.active }
  });
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
