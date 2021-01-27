//  given an array of length N and values ranging from 1 to N , find first duplicate number and return it, if no element found return -1
//  eg => [1,2,1,2,3,3] # 1
//  [2,1,3,5,3,2]  # 3
//  [1,2,3,4,5,6] # -1

// naive approach - looping through the array twice, for each element looping through the rest of array and check its index keeping track of minimum duplicate index
// O(n^2) time
// function firstDuplicate(arr) {
//   let minSecondIndex = arr.length;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         minSecondIndex = Math.min(minSecondIndex, j);
//       }
//     }
//   }
//   if (minSecondIndex === arr.length) {
//     return -1;
//   } else {
//     return arr[minSecondIndex];
//   }
// }

// O(n) time | O(n) space
// function firstDuplicate(arr) {
//   let seen = {};
//   for (let item of arr) {
//     if (item in seen) {
//       return item;
//     } else {
//       seen[item] = true;
//     }
//   }
//   return -1;
// }

//  smart approach - since the array elements are ranging from 1 to N, we can track the indices of visited number with values in the array
//  O(n) time | O(1) space
function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[Math.abs([arr[i]]) - 1] < 0) {
      // if already -ve, means we have encountered it before in arr
      return Math.abs(arr[i]);
    } else {
      arr[Math.abs(arr[i]) - 1] = -arr[Math.abs(arr[i]) - 1];
    }
  }
  return -1;
}

console.log(firstDuplicate([1, 2, 1, 2, 3, 3]));

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([1, 2, 3, 4, 5, 6]));
