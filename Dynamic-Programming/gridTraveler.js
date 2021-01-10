/* Problem Statement 
say that you are a traveller on a 2d grid, you begin in the top left corner and your goal is to travel to the bottom-right corner. You may only move down or right
=>In how many ways can you travel to the goal on a grid with dimensions of m * n
*/

// n + m levels(height of tree) and 2 function calls at each level
// O(2^(m+n)) time
// O(m + n) space
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(3, 4));
// // console.log(gridTraveler(18, 18));

/**
 *
 *
 * number of ways to travel in a 2*3 grid will be same as in a 3*2 grid - flipping of arguments doesn't effect here
 * i.e gridTraveller(1,2) is same as gridTraveller(2,1)
 * using memoization -
 * O(n) time | O(n) space
 */

const gridTraveller = (m, n, memo = {}) => {
  const key = m + "," + n;
  //are the arguments in the memo
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(3, 4));
console.log(gridTraveller(18, 18));
console.log(gridTraveller(25, 25));

/**
 * seperator(,) is used in the key to distinguish between different keys. for eg, if we don't use seperator, for values of m = 42,n=3 and m =4, n=23, we would have the same key as 423
 * but using a seperator(,) distinguish them as - 42,3 and 4,23
 */

/**
 *                (3,2)
 *             /         \
 *           (2,2)       (3,1)
 *           / \          /   \
 *       (1,2) (2,1)    (2,1)  (3,0)
 *      /     \   / \       / \   / \
 * (0,2) (1,1)  .....................
 *
 * finding number of ways in a 3*2 grid - when we start from top-left , we can either move down or right. so if we move down we then left with 2*2 grid, similarly if we choose to move right we will be left with 3*1 grid.
 * so number of ways to go from top left to bottom right in a 3*2 grid can be broken down into smaller subproblems, i.e
 * n(3*2) = n(2*2) + n(3*1) , similarly , n(2*2) = n(1*2) + n(2*1) and so on.. until we reach a base case
 * base cases - for grid 1 * 1 , number of ways = 0
 * for grid with any row/column = 0 , number of ways = 0
 * - we have used memoization to avoid doing repetitive tasks in the tree .
 */
