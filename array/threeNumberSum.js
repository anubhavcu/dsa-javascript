function threeNumberSum(arr, target) {
  arr.sort();
  let res = new Set();
  for (let i = 0; i < arr.length - 2; i++) {
    let leftIdx = i + 1,
      rightIdx = arr.length - 1;
    while (leftIdx < rightIdx) {
      let currentSum = arr[i] + arr[leftIdx] + arr[rightIdx];
      if (currentSum === target) {
        res.add([arr[i], arr[leftIdx], arr[rightIdx]]);
        leftIdx += 1;
        rightIdx -= 1;
      } else if (currentSum < target) {
        leftIdx += 1;
      } else if (currentSum > target) {
        rightIdx -= 1;
      }
    }
  }

  let ans = [...res]; // making array of set
  return ans;
  //   return res;
}

let arr = [-2, 0, 0, 2, 2],
  target = 0;

console.log(threeNumberSum(arr, target));

// let a = new Set();
// a.add(4);
// a.add(3);
// a.add(6);
// a.add(10);
// a.add(8);
// a.add("hello");

// console.log(a);
// let b = [...a];
// console.log(b);
