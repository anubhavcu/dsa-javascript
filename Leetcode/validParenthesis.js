// https://leetcode.com/problems/valid-parentheses/

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// Input: s = "([)]"
// Output: false

// Input: s = "{[]}"
// Output: true

var isValid = function (s) {
  let stack = [];
  for (let char of s) {
    if (char === '{' || char === '(' || char === '[') {
      stack.push(char);
      console.log(stack);
    } else if (
      stack.length &&
      char === ')' &&
      stack[stack.length - 1] === '('
    ) {
      stack.pop();
    } else if (
      stack.length &&
      char === '}' &&
      stack[stack.length - 1] === '{'
    ) {
      stack.pop();
    } else if (
      stack.length &&
      char === ']' &&
      stack[stack.length - 1] === '['
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
