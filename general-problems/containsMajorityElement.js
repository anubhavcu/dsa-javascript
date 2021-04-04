function containsMajorityElement(arr) {
  let freq = {};
  for (let item of arr) {
    if (item in freq) {
      freq[item] += 1;
    } else {
      freq[item] = 1;
    }
  }

  return checkMajority(freq, arr.length / 2) ? 'YES' : 'NO';
}
function checkMajority(freq, length) {
  for (let item in freq) {
    if (freq[item] > length) {
      return true;
    }
  }
  return false;
}

console.log(containsMajorityElement([1, 2, 3, 4, 5, 2, 2, 2, 2]));
console.log(containsMajorityElement(['a', 'b', 'a', 'a', 'c', 'd', 'b']));
