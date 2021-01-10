// O(2^n) time | O(n) space
// var fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// using memoization
// O(n) time  | O(n) space
var fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(5));
console.log(fib(9));
console.log(fib(15));
console.log(fib(50));

/** in operator
 * returns true if the specified property is in the object or its prototype chain
 */
const car = {
  make: "Tesla",
  model: "new model",
  year: 2021,
};

console.log("make" in car);
console.log("model" in car);
console.log("speed" in car);
if ("company" in car === false) {
  car.company = "Tesla";
}

// adding a property to object
car.topSpeed = 300;
console.log("topSpeed" in car);

// deleting a property from an object
delete car.topSpeed;
console.log("topSpeed" in car);

// cloning object with similar and modified properties
const newObj = { ...car, year: 2020, topSpeed: 350 }; //spread opr
console.log(newObj);

/** in operator in case of Arrays
 * you must provide the index of number, not the value at that index
 * arrays are created as an object and has prototype methods (so length in chars will return true as it has length as its property )
 */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array([1, 2, 3, 4, 5, 6, 7]);
console.log(arr1, arr2);
console.log(typeof arr1, typeof arr2); // object

let chars = ["A", "B", "C", "D"];
console.log("A" in chars); // false
console.log(1 in chars); // true
console.log(8 in chars); //false
console.log(length in chars); // same as "length" in chars

let color1 = "Red";
let color2 = new String("blue");
console.log(typeof color1); // string
console.log(typeof color2); // object

// console.log(length in color1); // error as color1 is not an string object
console.log(length in color2); // true
