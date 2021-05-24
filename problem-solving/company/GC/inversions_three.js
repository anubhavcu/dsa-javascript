// same problem as in link
// https://www.geeksforgeeks.org/count-inversions-of-size-three-in-a-give-array/

function maxInversions(arr) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let small = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        small += 1;
      }
    }
    let great = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        great += 1;
      }
    }
    count += great * small;
  }
  return count;
}
