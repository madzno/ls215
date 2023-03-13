/*
Input = a string that represents an email address
Output = true or false depending on if the string is a valid
email address

Rules
- There must be ONE @ sign (more than one sign OR no signs and its not a valid
email address)
- The local part (to the left of the @, must contain one or more letters and or digits,
no other characters)
- the domain part (to the right of the @, must contain two or more components separated
by a dot)
  - there must be at least one dot
  - the components on either side of the doto must contain letters only
- the comonpents only contain letters

Algorithm
- define a function isValidEmail with a parameter email
- declare a variable emailComponents to the return value of calling split on email
and passing `@` as an argumnet
- if the length of emailcomponents is not 2, return false
- declare two variables [left, right] to the emailComponents array
- if any characters in the left component match a non alphanumeric (i.e ^A-Za-z0-9),
then return false
- for the right component initialize a variable domainPartArr to the return value of
calling split with `.` as an argumnet
- if domainePartArr contains any empty strings, return false
- iterate through domainePartArr, if any characters do not match letters (i.e ^A-Za-z)
return false
- return true if none of the above is true
*/


function isValidEmail(email) {
  let emailComponents = email.split('@');
  if (emailComponents.length !== 2) return false;

  let [left, right] = emailComponents;
  if (left.match(/[^a-zA-Z0-9]/g)) return false;

  let domainePartArr = right.split('.');
  if (domainePartArr.length < 2) return false;
  if (domainePartArr.some(words => words === '')) return false;

  for (let index = 0; index < domainePartArr.length; index += 1) {
    if (domainePartArr[index].match(/[^a-zA-Z]/)) return false;
  }

  return true;

}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true // multiple dots ok
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false // no dot
console.log(isValidEmail('foo.bar@baz.to'));          // returns false // non alpha numeric in first part
console.log(isValidEmail('foo@baz.'));                // returns false // a dot but no letters in the second component
console.log(isValidEmail('foo_bat@baz'));             // returns false // non alphanumerics in first part
console.log(isValidEmail('foo@bar.a12'));             // returns false // numbers in second part (only leters)
console.log(isValidEmail('foo_bar@baz.com'));         // returns false // non alphanumerics in first part
console.log(isValidEmail('foo@bar.....com'));         // returns false // there needs to be a component for each . not ane mpty string
