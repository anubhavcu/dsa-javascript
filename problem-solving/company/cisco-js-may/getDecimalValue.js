// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

function getNumber(binary) {
  // Write your code here
  let res = '';
  while (binary != null) {
    // res += binary.data
    res += binary.data === 1 ? 1 : 0;

    binary = binary.next;
  }

  return parseInt(res, 2);
}
