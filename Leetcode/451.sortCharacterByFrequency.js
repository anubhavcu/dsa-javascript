// Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

function sortCharactersByFrequency(string) {
  let map = {};
  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] in map) {
  //       map[string[i]] += 1;
  //     } else {
  //       map[string[i]] = 1;
  //     }
  //   }

  for (let char of string) {
    map[char] = (map[char] || 0) + 1;
    // console.log(map);
  }
  let sortedCharArr = Object.keys(map).sort((a, b) => map[b] - map[a]);
  console.log(sortedCharArr);

  let res = '';
  for (let char of sortedCharArr) {
    res += char.repeat(map[char]);
  }
  return res;
}

let s1 = 'tree';
console.log(sortCharactersByFrequency(s1));

// const a = ['a', 'b', 'c', 'd'];
// for (let item of a) {
//   console.log(item);
// }

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 5,
// };

// for (let item in obj) {
//   console.log(item, ' : ', obj[item]);
// }
