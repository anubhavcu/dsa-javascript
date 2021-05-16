// problem link
// https://www.geeksforgeeks.org/equilibrium-index-of-an-array/

function balancedSum(arr) {
  let sum = 0,
    leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }

  // if no pivot is found
  return -1;
}
