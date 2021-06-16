// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // forEach, map, filter, reduce, some, every , find, findIndex

// arr.forEach((item, index, x) => {
//   console.log(item * 2);
//   //   arr[index] += 1;
// });

// let newArr = arr.map((item) => item * 21);
// console.log(arr);
// console.log(newArr);

// let even = arr.filter((item) => item % 2 === 0);
// let evenNumberGreaterThanFive = arr.filter(
//   (item) => item > 5 && item % 2 === 0
// );
// console.log(even);

// console.log(evenNumberGreaterThanFive);

// let sum = arr.reduce((res, item) => item + res);
// let sum100 = arr.reduce((res, item) => item + res, 100);
// console.log(sum);
// console.log(sum100);

// let hasSomeEvenNumber = arr.some((item) => item % 2 === 0);
// let hasSomeNegativeNumber = arr.some((item) => item < 0);
// console.log(hasSomeEvenNumber);
// console.log(hasSomeNegativeNumber);

// let everyNumberPositive = arr.every((item) => item > 0);
// let everyNumberNegative = arr.every((item) => item < 0);
// console.log(everyNumberPositive);
// console.log(everyNumberNegative);

// let number11 = arr.find((item) => item === 1);
// let number1Index = arr.findIndex((item) => item === 10);
// console.log(number11);
// console.log(number1Index);

// // slice
// let a2 = arr.slice(1, 7);
// console.log(a2);
// console.log(arr);

// // // splice
// // let a3 = arr.splice(1, 4, 'hello', 'world', [1, 2, 3, 4], a2); // returns deleted elements
// // console.log(a3);

// // console.log(arr);

// // looping through the arr
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// for (let item of arr) {
//   console.log(item);
// }

// // looping objects
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// obj.__proto__.x = 100;
// for (let item in obj) {
//   console.log(item, obj[item]);
// }
// console.log(Object.getPrototypeOf(obj));
// console.log(obj);
// object -keys, values, entries

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greeting = function () {
    console.log(`hello world this is ${this.firstName} ${this.lastName}`);
  };
}

const john = new Person('john', 'doe');
john.greeting();

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}
for (var j = 0; j < 10; j++) {
  setTimeout(() => console.log(j), 0);
}
var myObject = {
  foo: 'bar',
  func: function () {
    var self = this;
    //     console.log(this); // => myObject
    console.log('outer func:  this.foo = ' + this.foo);
    console.log('outer func:  self.foo = ' + self.foo);
    (function () {
      //       console.log(this); // > window
      console.log('inner func:  this.foo = ' + this.foo);
      console.log('inner func:  self.foo = ' + self.foo);
    })();
  },
};
myObject.func();

let p1 = [1, 2, 3];
let p2 = p1;
let p3 = p1.slice();
p2.push(4);
p3.push(5);
console.log(p1, p2, p3);

// ! very important = this keyword behaviour with arrow functions
const human = {
  age: 10,
  grow: () => {
    this.age++;
  },
};
human.grow();
console.log(human.age);

let arr = [
  3,
  null,
  [5, 6, undefined],
  false,
  [1, null, [2, [5, 6], 5], undefined],
];
