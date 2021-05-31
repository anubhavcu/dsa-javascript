/**
 * find largest square matrix composed of only one's (1) within a matrix
 * basically finding largest square submatrix in a square matrix
 * eg
 * [1 1 0 1 0
 *  1 1 1 1 1
 *  0 0 1 1 1
 *  0 0 1 1 1
 *  1 1 0 0 0]
 * => for above ans is 3
 */

function findLargestSqaure(grid) {
  let dp = [];
  if (grid.length === 0) return 0;
  let max = 0;
  for (let i = 0; i <= grid.length; i++) {
    dp[i] = [];
  }
  for (let i = 0; i <= grid[0].length; i++) {
    dp[0][i] = 0;
  }
  for (let i = 1; i <= grid.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i <= grid.length; i++) {
    for (let j = 1; j <= grid.length; j++) {
      if (grid[i - 1][j - 1] === 1) {
        let min = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        dp[i][j] = min + 1;
        max = Math.max(dp[i][j], max);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return max;
}
let grid = [
  [1, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 0, 0, 0],
];

console.log(findLargestSqaure(grid));
