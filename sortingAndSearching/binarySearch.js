// time complexity : O(log n)
// space complexity: O(1)

let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

// * iterative method

let binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch(nums, 7));
console.log(binarySearch(nums, 13));
console.log(binarySearch(nums, 16));

// * recursive approach for above solution
// let binarySearch = (arr, target) => {
//   return binarySearchHelper(arr, target, 0, arr.length - 1);
// };
// function binarySearchHelper(arr, target, left, right) {
//   if (left > right) return -1;

//   let mid = Math.floor((left + right) / 2);
//   if (arr[mid] === target) return mid;
//   else if (arr[mid] > target) {
//     return binarySearchHelper(arr, target, left, mid - 1);
//   } else return binarySearchHelper(arr, target, mid + 1, right);
// }
