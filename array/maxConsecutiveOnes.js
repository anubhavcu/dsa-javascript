function findMaxConsecutiveOnes(arr) {
  let res = 0,
    count = 0;
  for (let item of arr) {
    if (item === 1) {
      count += 1;
    } else {
      res = Math.max(res, count);
      count = 0;
    }
  }
  return Math.max(res, count);
}

let array = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(array));
