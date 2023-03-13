function isBalanced(string) {
  let chars = string.split('');
  let parenthesesCount = 0;

  for (let index = 0; index < chars.length; index += 1) {
    if (chars[index] === '(') {
      parenthesesCount += 1
      if (parenthesesCount < 0) return false;
    } else if (chars[index] === ')') {
      parenthesesCount -= 1
      if (parenthesesCount < 0) return false;
    }
  }

  return parenthesesCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
