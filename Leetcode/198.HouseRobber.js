// Example 1
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

let rob = function (nums) {
  // base case
  // if house is 0, 1, 2
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  // if house is more than 2, dp approach
  // dp[i] means the maximum amount that can be robbed uptil house number i
  let dp = new Array(nums.length);
  (dp[0] = nums[0]), (dp[1] = Math.max(nums[0], nums[1]));
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[dp.length - 1];
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));

// TODO : factorial of very large numbers algorithm

// function factorial(num) {
//   if (num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// console.log(factorial(10));
// console.log(factorial(13));
// console.log(factorial(100));
// console.log(factorial(170));
// console.log(factorial(171));
// console.log(factorial(200));

// const res = BigInt(factorial(171));
