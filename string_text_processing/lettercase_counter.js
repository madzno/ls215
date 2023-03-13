function letterCaseCount(string) {
  let countObj = { lowercase: 0, uppercase: 0, neither: 0 }

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    if (currentChar.match(/[a-z]/g)) {
      countObj.lowercase += 1;
    } else if (currentChar.match(/[A-Z]/g)) {
      countObj.uppercase += 1;
    } else {
      countObj.neither += 1;
    }
  }

  return countObj;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
