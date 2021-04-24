/**
 * A string s comprised of digits from 0 to 9, contains a perfect substring if all the elements whitin a substring occur exactly k times. calculate the number of perfect substrings
 *
 * eg : s = 1102021222 ; k = 2
 * ans = 6 {11[0:1], 110202[0:5], 102021[1:6], 0202[2:5], 22[7:8], 22[8:9]}
 * https://www.geeksforgeeks.org/number-substrings-count-character-k/
 */

/**
 * The idea is to traverse through all substrings. We fix a starting point, traverse through all substrings starring with the picked point, we keep incrementing frequencies of all characters. If all frequencies become k, we increment result. If count of any frequency becomes more than k, we break and change starting point.
 */
// O (n^3) time

/* **  
 * We can improve this program by running the second loop only 10*k times because there are only 10 characters available and if the substring contains more than 10*k characters then at least one character appears more than k+1 times.
 link (JAVA solution ) - https://www.thecodingshala.com/2020/12/find-number-of-substrings-with-count-of-each-character-as-k.html
 */

/**
 * Similar solution in link - https://stackoverflow.com/a/65349204 ;  in Java which runs in O(n^2) time.
 */

function perfectSubstring(s, k) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    // let freq = {};
    let freq = new Array(10); // 0 - 9 numbers
    freq.fill(0); // initially all frequencies are 0
    for (let j = i; j < s.length; j++) {
      if (j > i + 10 * k) break; // * see imp above
      let ch = s[j];
      let chIndex = parseInt(ch);
      freq[chIndex] += 1;
      // max occurence of each element should be <= k
      if (freq[chIndex] > k) {
        break;
      } else if (freq[chIndex] === k && check(freq, k) === true) {
        // console.log(freq);
        res += 1;
      }
    }
  }
  return res;
}

// returns true if all values in freq are either 0 or k
function check(freq, k) {
  //   console.log(freq);
  for (let i = 0; i < 10; i++) {
    if (freq[i] && freq[i] !== k) {
      return false;
    }
    // return freq[i] && freq[i] !== k ? false : true
  }
  return true;
}
let s = '1102021222',
  k = 2;
console.log(perfectSubstring(s, k));
s = '1221221121';
k = 3;
console.log(perfectSubstring(s, k));

/**
 * using of obj - adding and removing props , checking a particular prop is present in obj or not
 */
// let obj = {
//   a: 1,
//   b: 2,
//   c: 1,
//   d: 4,
// };
// // console.log(obj);
// if ('a' in obj) {
//   // * for checking with variable key - if (`${varName}` in obj)
//   //   console.log(obj.a + 1);
//   obj.a += 1;
//   obj = { ...obj, a: obj.a + 1 }; // similar modifying as above
// }
// console.log(obj);
// console.log(obj.a);
// // adding a prop in obj
// obj.x = 100;
// obj['y'] = 101; // alternative for adding a prop in obj (better use 'dot' opr ;))
// console.log(obj);

// // checking if a key exists in an object, if it does then get its value and increment by one , otherwise add it to object with value 0 and then increment

// let c = 'q';
// let countOfD = 'd' in obj ? obj.d : 0; // checking for key : d
// let countOfCVar = c in obj ? obj.q : 0; // checking for key : c - variable

// obj[`${c}`] = countOfCVar; // * important use of this method of adding props to obj (because using obj.c = countOfCVar will change already present obj.c value, so better use this method when there is a case of adding a variable to the object {or use unique keys if possible.})

// console.log('value of count of d ', countOfD);
// console.log(`value of count of ${c} `, countOfCVar);
// obj.d += 1;
// console.log(obj);

// ! another imp point to note -- take care when to use obj.prop || obj[prop] || obj[`${prop}`] -- types of syntax
// let p = 'a';

// let obj = {
//   a: 1,
//   b: 2,
// };

// console.log(obj.a); // 1
// console.log(obj.p); // undefined
// console.log(obj[`${p}`]); // 1
