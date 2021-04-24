function applicationPairs(
  deviceCapacity,
  foregroundAppList,
  backgroundAppList
) {
  // Write your code here
  let res = [];
  foregroundAppList.sort((a, b) => a[1] - b[1]);
  backgroundAppList.sort((a, b) => a[1] - b[1]);

  let minDiff = Infinity;
  let l = 0,
    r = backgroundAppList.length - 1;
  while (l < foregroundAppList.length && r >= 0) {
    let sum = foregroundAppList[l][1] + backgroundAppList[r][1];
    if (sum > deviceCapacity) {
      r -= 1;
    } else {
      let diff = deviceCapacity - sum;

      if (diff < minDiff) {
        minDiff = diff;
        res = [[foregroundAppList[l][0], backgroundAppList[r][0]]];
      } else if (diff === minDiff) {
        res.push([foregroundAppList[l][0], backgroundAppList[r][0]]);
      }
      let temp = r;
      while (
        temp - 1 >= 0 &&
        backgroundAppList[temp][1] === backgroundAppList[temp - 1][1]
      ) {
        res.push([foregroundAppList[l][0], backgroundAppList[temp - 1][0]]);
        temp -= 1;
      }
      l += 1;
    }
  }
  return res;
}

// problem - https://leetcode.com/discuss/interview-question/373202

// Given 2 lists a and b. Each element is a pair of integers where the first integer represents the unique id and the second integer represents a value. Your task is to find an element from a and an element form b such that the sum of their values is less or equal to target and as close to target as possible. Return a list of ids of selected elements. If no pair is possible, return an empty list.

// Example 1:

// Input:
// a = [[1, 2], [2, 4], [3, 6]]
// b = [[1, 2]]
// target = 7

// Output: [[2, 1]]

// Explanation:
// There are only three combinations [1, 1], [2, 1], and [3, 1], which have a total sum of 4, 6 and 8, respectively.
// Since 6 is the largest sum that does not exceed 7, [2, 1] is the optimal pair.
// Example 2:

// Input:
// a = [[1, 3], [2, 5], [3, 7], [4, 10]]
// b = [[1, 2], [2, 3], [3, 4], [4, 5]]
// target = 10

// Output: [[2, 4], [3, 2]]

// Explanation:
// There are two pairs possible. Element with id = 2 from the list `a` has a value 5, and element with id = 4 from the list `b` also has a value 5.
// Combined, they add up to 10. Similarily, element with id = 3 from `a` has a value 7, and element with id = 2 from `b` has a value 3.
// These also add up to 10. Therefore, the optimal pairs are [2, 4] and [3, 2].
