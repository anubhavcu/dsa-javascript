// same prob:  https://leetcode.com/problems/delete-and-earn/
// soln link - https://leetcode.com/problems/delete-and-earn/discuss/762741/JavaScript-Solution-DP-Approach
// dp approach

function maxPoints(elements) {
  // n < 10 ^ 5 was given in ques
  let n = 100001,
    counts = new Array(n).fill(0);
  for (let num of elements) {
    counts[num] += 1;
  }
  let dp = new Array(n).fill(0);
  dp[1] = counts[1];
  for (let i = 2; i < n; i++) {
    let points = counts[i] * i;
    dp[i] = Math.max(dp[i - 2] + points, dp[i - 1]);
  }
  return dp[n - 1];
}
