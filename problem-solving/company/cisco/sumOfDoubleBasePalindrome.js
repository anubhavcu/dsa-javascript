/**
 * decimal number 585 = (1001001001)2 is palindromic in both bases. Hence it is double base palindrome number
 * WAP to find sum of all double base palindrome numbers which are less than a given number (Starting from 1 including that number)
 * eg. for n = 5; 1, 3, 5 are double base palindrome => sum = 1 + 3 + 5 = 9
 *
 * ** in either base may not include leading zeros
 */

/** 
 * Approach 
 * Check if it is a palindrome in base 10
- If yes, then convert it into base k
- Check if it is palindrom in base k
- If yes, then add it in sum.
 */

function getSumOfDoubleBasePalindromes(maximum) {
  let sum = 0;
  for (let i = 1; i <= maximum; i++) {
    sum += isDoublePalindrome(i);
    // console.log(isDoublePalindrome(i));
  }
  return sum;
}

function isDoublePalindrome(num) {
  let isPalindromeNumber = isPalindrome(num);
  if (isPalindromeNumber === false) {
    return 0;
  }
  // check for base 2
  let numBase2 = num.toString(2);
  let revNumBase2 = numBase2.split('').reverse().join('');
  if (numBase2 === revNumBase2) {
    return num;
  } else {
    // if base 10 is palindrome and base 2 is Not
    return 0;
  }
}
function isPalindrome(num) {
  // takes number
  let revString = num.toString().split('').reverse().join('');
  return revString === num.toString();
}

console.log(getSumOfDoubleBasePalindromes(5));
console.log(getSumOfDoubleBasePalindromes(100));
console.log(getSumOfDoubleBasePalindromes(26));

// * toString - takes optional radix to convert numeric value to string in that base
// * parseInt - takes optional radix to specify the base of number represented by string- if not passed then decimal

// let n = 153;
// let o = n.toString(); // *  153
// let o2 = n.toString(2); //* 10011001
// //*  to change back to int from string in both bases
// let s1 = parseInt(o);
// let s2 = parseInt(o2);
// let s3 = parseInt(o2, 2);
// console.log(n, o);
// console.log(o2);
// console.log(s1); // * 153
// console.log(s2); // * 10011001
// console.log(s3); //* 153

// * to check palindrome in JS
let num = 123;

// function isPalindrome(num) {
//   let revString = num.toString().split('').reverse().join('');
//   return revString === num.toString();
// }
// console.log(isPalindrome(123221));

// console.log(num.toString()); //*  123
// console.log(num.toString().split('')); //* ['1', '2', '3'];
// console.log(num.toString().split('').reverse()); //* ['3', '2','1']
// console.log(num.toString().split('').reverse().join('')); // * 321
