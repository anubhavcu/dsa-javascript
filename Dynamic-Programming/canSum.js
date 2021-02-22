console.log(canSum(7, [2, 3])); //false
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); //false

/**
 * using two pointer approach
 * O(nlogn) time { nlogn(for sorting) + n(for traversing the array once) }
 * O(1) space
 */

// function canSum(targetSum, numbers) {
//   numbers.sort();
//   let left = 0,
//     right = numbers.length - 1;
//   while (left < right) {
//     var currentSum = numbers[left] + numbers[right];
//     if (currentSum === targetSum) {
//       return true;
//     } else if (currentSum < targetSum) {
//       left += 1;
//     } else if (currentSum > targetSum) {
//       right -= 1;
//     }
//   }
//   return false;
// }

/**
 * using hash table to store the numbers visited and then checking later on
 * time - O(n)
 * space - O(n)
 */
function canSum(targetSum, numbers) {
  is_seen = {};
  for (let num of numbers) {
    if (targetSum - num in is_seen) {
      return ` target: ${targetSum} => ${[num, targetSum - num]}`;
    } else {
      is_seen[num] = true;
    }
  }
  return false;
}

/**
 * using dynamic programming
 */

// const canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;
//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) {
//       return true;
//     }
//   }

//   return false;
// };
