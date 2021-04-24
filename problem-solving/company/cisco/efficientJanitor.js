/**  Similar to Boats to save people problem (leetcode 881) {here bags in place of boats }
 * O(nlog n) time
 * O(n) space
 */

// Approach
/**
 * sort the weights array , and use 2 pointers , one at begining and one at end
 * We pair the heaviest bag with the lightest bag,
 * if at any time the sum of weights of two bags is more than the limit, we will choose with the heaviest bag and move the right pointer and count += 1
 * if sum of weights of heaviest and lightest is within the limit, move both pointers and count += 1
 */

function efficientJanitor(weight) {
  weight.sort((a, b) => a - b);
  let leftIdx = 0,
    rightIdx = weight.length - 1,
    count = 0;
  while (leftIdx <= rightIdx) {
    count += 1;
    if (weight[leftIdx] + weight[rightIdx] <= 3.0) {
      leftIdx += 1;
    }
    rightIdx -= 1;
  }
  return count;
}
let weight = [1.01, 1.99, 2.5, 1.5, 1.01];
console.log(efficientJanitor(weight));
