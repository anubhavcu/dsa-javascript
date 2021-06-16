// finding duplicate in a string , or number of duplicates or character with max occurence
let findDuplicate = (string) => {
  let map = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in map) {
      map[string[i]] += 1;
    } else {
      map[string[i]] = 1;
    }
  }
  //   let res = '';
  let max = 0,
    maxElement;
  for (let item in map) {
    //     if (map[item] > 1) {
    //       console.log(item, map[item]);
    //       res += item;
    //     }
    if (map[item] > max) {
      max = map[item];
      maxElement = item;
    }
  }
  return maxElement;
};
let str = 'aabbccccd';
let str2 = 'aabbccccdeeeeeeefsdahlkfjashfhdhdjshfkdscvyyyy';
console.log(findDuplicate(str));
console.log(findDuplicate(str2));
