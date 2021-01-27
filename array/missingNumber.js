//  Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

//  Example 1:

//  Input: [3,0,1]
//  Output: 2
//  Example 2:

//  Input: [9,6,4,2,3,5,7,0,1]
//  Output: 8

function missingNumber(arr) {
  let n = arr.length;
  let sum = arr.reduce((res, item) => res + item, 0);
  let naturalSum = (n * (n + 1)) / 2;
  // for (let item of arr) {
  //   sum += item;
  // }
  return Math.abs(naturalSum - sum);
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([1, 2, 4, 5, 6]));
