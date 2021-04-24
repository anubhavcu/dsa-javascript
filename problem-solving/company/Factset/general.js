// const arr = [10, 20, 30, 40];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log('Index:' + i + ', element:' + arr[i]);
//   }, 3000);
// }

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((num) => {
//   console.log(num);
//   if (num === 4) {
//     break; // * cause error (forEach is a function )
//   }
// });

// let name = 'Mark';
// let user = {
//   name: 'John',
//   hi() {
//     return this.name;
//   },
// };
// let hi = user.hi;
// let userName = hi();
// console.log(userName);
// console.log(hi());

//3
// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => {
//     throw new Error('My Error');
//   })
//   .catch(() => 1)
//   .then((x) => x + 1)
//   .then((x) => console.log(x))
//   .catch(console.error);

// //
// let arr = [1, 2, 3, 4];
// delete arr[3];
// console.log(arr.length);
// console.log(arr);

// function test() {
//   return new Promise(function (resolve, reject) {
//     throw new Error('Whoops');
//   })
//     .catch(function (error) {
//       console.log('Error detected');
//     })
//     .then(function () {
//       console.log('Next..');
//     });
// }

// test().then(function () {
//   console.log('Promise execution complete');
// });

// //
// function test() {
//   console.log(a);
//   console.log(foo());

//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }

// test();

// var x = 1;
// var output = (function () {
//   delete x;
//   return x;
// })();

// console.log(output); //1

// function test() {
//   console.log('Zero args');
// }
// function test(a) {
//   console.log(a);
// }
// function test(a, b) {
//   console.log(a, b);
// }

// test();
// test(1);
// test(1, 2);
// test(1, 2, 3, 4);

//
// see - https://stackoverflow.com/a/47407318
// var myObject = {
//   foo: 'bar',
//   func: function () {
//     var self = this;
//     (function () {
//       console.log('inner func: this.foo = ' + this.foo);
//       console.log('inner func: self.foo = ' + self.foo);
//     })();
//   },
// };
// myObject.func();
// var a = new Array(2, 5);
// console.log(a);

let a, b, c, d, e;
(b = null), (c = {}), (d = function () {}), (e = 'object');

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

// //
// const a = '' - 1 + 0;
// const b = true + false;
// console.log(a);
// console.log(b);
// console.log(a / b);

// (function () {
//   var objA = {
//     foo: 'foo',
//     bar: 'bar',
//   };
//   var objB = {
//     foo: 'foo',
//     bar: 'bar',
//   };
//   console.log(objA == objB);
//   console.log(objA === objB);
// })();

// * imp
// console.log(1 < 2 < 2); // true
// console.log(3 > 2 > 1); // false
// console.log([] === []); // false
// console.log({} == {}); // false
// console.log(typeof null === 'object'); // true

// const a = '' - 1 + 0;
// const b = true + false;
// console.log(a);
// console.log(b);
// console.log(a / b);

//
//
// Dassault sys

// var MyClass = function (n) {
//   this.n = n;
// };
// MyClass.sqaure = function () {
//   return this.n * this.n;
// };

// var ob = new MyClass(4);
// console.log(ob.sqaure());

// var a = {};
// var b = a;
// a.v = 1;
// b.v = 2;
// console.log(a.v);
