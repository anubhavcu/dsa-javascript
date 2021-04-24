// function greeting(name) {
//   var msg = 'hello ';
//   function abc() {
//     var a = msg;
//     console.log(a);
//   }
//   abc();
//   return msg + name;
// }

// console.log(greeting('John'));
// // console.log(msg);

// var a = 10;

// function hello() {
//   console.log(a);
//   var a = 50;
// }

// hello();

// // * handling multiple parameters with single value in function
// function sum(...args) {
//   console.log(args.reduce((res, item) => res + item));
//   console.log(args);
// }

// sum(2, 3, 4, 5);

// const arr = [10, 20, 30, 40];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log('Index:' + i + ', element:' + arr[i]);
//   }, 3000);
// }
// * call , apply, bind

// let name1 = {
//   firstName: 'john',
//   lastName: 'doe',
//   greeting: function (msg, age) {
//     return (
//       msg + ' ' + this.firstName + ' ' + this.lastName + ' and you are ' + age
//     );
//   },
// };

// let name2 = {
//   firstName: 'sara',
//   lastName: 'williams',
// };

// console.log(name1.greeting('hello', 23));
// console.log(name1.greeting.call(name2, 'hello', 24));
// console.log(name1.greeting.apply(name2, ['hello', 24]));
// let newGreeting = name1.greeting.bind(name2, 'hello', 24);
// console.log(name1);
// console.log(name2);
// console.log(newGreeting());

// function countSubstring(str) {
//   let count = [],
//     ans = 0;
//   let i = 0,
//     j = 0;
//   while (i < str.length) {
//     if (j < str.length && count[str.charCodeAt(j) - 'a'.charCodeAt(0)] === 0) {
//       count[str.charCodeAt(j) - 'a'.charCodeAt(0)] += 1;
//       ans += j - i + 1;
//       j += 1;
//     } else {
//       count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
//       i += 1;
//     }
//   }
//   console.log(count);
//   return ans;
// }

// let Str = 'abcdefghijklmnopqrstuvwxyz';

// console.log(countSubstring(Str));
// let str = 'abscs';
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(1) - str.charCodeAt(0));
// const human = {
//   age: 10,
//   grow: () => {
//     this.age++;
//   },
// };

// human.grow();
// console.log(human.age);

// function foo(n) {
//   if (n === 1) return;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       console.log('*');
//     }
//   }
//   foo(n - 1);
// }

// // foo(8);
// let a = 10;
// b = undefined;

// console.log(!!(a && b));
// console.log(a && b);

// document.getElementById('demo').innerHTML = Number(true);

// const res = setTimeout(() => {
//   console.log('hello');
// }, 5000);

// console.log(res);

// var x = 21;
// const tes = function () {
//   console.log(x);
//   var x = 20;
// };

// tes();

//1.
// function foo(n, ...para) {
//   return ' ' + n * para.length;
// }

// console.log(foo(100, 'hello', 'world', 'ES6 rocks', true, 7));

//2
// const Foo = {
//   num: 1,
//   toString: function () {
//     return Foo.num++;
//   },
// };
// if (Foo == 1 && Foo == 2 && Foo == 3) {
//   console.log('PASS');
// }

//3
// class Animal {
//   constructor(id, name) {
//     (this.aId = id), (this.aname = name);
//   }
//   toString() {
//     return 'Animal > ' + this.aId + 'name' + this.aname;
//   }
// }
// class Dog extends Animal {
//   constructor(id, name, weight, breed = 'poodle') {
//     super(id, name);
//     this.dweight = weight;
//     this.dbreed = breed;
//   }
//   toString() {
//     return (
//       'dog > ' +
//       super.toString() +
//       ' breed ' +
//       this.dbreed +
//       'weight' +
//       this.dweight
//     );
//   }
// }

// var dog = new Animal();
// dog = new Dog(100, 'duke', '15k');
// console.log(dog.toString());

// //4
// const n = ['a', 'b', 'c'];
// n[0] = '2';
// // n = [2, 3, 4];
// console.log(n);

function ajaxCall() {
  var xmlHttp;
  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  }
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
      document.getElementById('content').innerHTML = xmlHttp.responseText;
    }
  };
  xmlHttp.open('GET', 'userguide.txt', true);
  xmlHttp.send();
}

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
var n = 6;
var foo = {
  n: 5,
  bar: function () {
    console.log(this.n);
  },
};
foo.bar();
var f = foo.bar;
f();

function count(users) {
  var res = {};
  users.reduce(function (prev, current, idx, arry) {
    if (!res[current.name]) {
      res[current.name] = 1;
    } else {
      res[current.name] += 1;
    }
  }, null);
  return res;
}

var alluser = [
  { name: 'a', id: 1 },
  { name: 'b', id: 2 },
  { name: 'c', id: 3 },
  { name: 'a', id: 4 },
  { name: 'c', id: 5 },
  { name: 'a', id: 6 },
];
console.log(count(alluser));

var j = JSON.parse('{"name": "david" , "age" : "40" }');
console.log(j.name + ',' + j.age);
