// https://levelup.gitconnected.com/javascript-algorithm-two-strings-f85c9d3117fc#:~:text=You%20are%20given%20two%20strings,the%20function%20will%20return%20YES%20.
// similar problem in above link , but in test, we are given two arrays(equal length) of strings, we need to check whether the corresponding elements (strings) of array share a common substring.

function commonSubstring(a, b) {
  // Write your code here
  // since both a, b are of equal length (|a| = |b| ), we can loop through either of them
  for (let i = 0; i < a.length; i++) {
    let strA = a[i],
      strB = b[i];
    console.log(isCommonString(strA, strB));
  }
}

function isCommonString(strA, strB) {
  let shortStr, longStr;
  if (strA.length < strB.length) {
    shortStr = strA;
    longStr = strB;
  } else {
    shortStr = strB;
    longStr = strA;
  }

  for (let j = 0; j < shortStr.length; j++) {
    if (longStr.indexOf(shortStr[j]) !== -1) {
      return 'YES';
    }
  }
  return 'NO';
}
let a = ['hello', 'hi'];
let b = ['world', 'bye'];
commonSubstring(a, b);
