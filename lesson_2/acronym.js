/*
Input = a string
Output = a string of acronyms

What is an acronym?
The first letter of each word capitalized
A word is considered a space deliminated or hypen deliminated
'complimentary metal-oxide semiconductor'
complimentary, metal, oxide, semiconductor all words

Algorithm
- define a function acronym that takes a string as an argument
- declare a variable removeHyphens and initialize it to the input string with
all hyphens replaced by a space ' '
- declare a variable acronymString to an empty string
- declare a variable wordsArr to the return value of calling split with a spase
as an argument on removeHypens
- iterate through words arr, for each string append the string's first letter uppercased
to the acronymString
- return the acryonymString
*/


function acronym(string) {
  let removeHyphens = string.replace(/-/g, ' ');
  let wordsArr = removeHyphens.split(' ');
  let acronymString = '';

  wordsArr.forEach(word => {
    acronymString += word[0].toUpperCase();
  });

  return acronymString;
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
