// // var num1 = 15, num2 = 1
// // var obj = {a : 20 }
// // with(obj){
// //   console.log(num2)
// // }

// // if([]){
// //   console.log('hello')
// // }
// // console.log(2<<(5-1))

// let person = "Hue";
// if (true) {
//   let person = "Haley";

//   if (true) {
//     console.log(person);
//   }
// }
// console.log(person);

// const num1 = 4;
// const num2 = [];
// for (var i = 0; i < num1; i++) {
//   num2.push(i + 1);
// }

// console.log(num2);

// function find() {
//   return {
//     bar: "hey there",
//   };
// }

// function good() {
//   return {
//     bar: "hello there",
//   };
// }

// console.log(find());
// console.log(good());

// let randomValue = {name : "Prabhat"}
// randomValue = 23
// if(!typeof randomValue === 'string'){
//   console.log("it is not a string ! ")
// }else{
//   console.log(("string"))
// }

// if(true || false) {
//   person ='harry'
// console.log(person)
// }

// console.log(person)

// class Animal {
//   constructor() {
//     console.log('cat')
//   }
// }

// class Wild extends Animal{
//   constructor() {
//     console.log('tiger')
//     super()
//   }
// }

// const pet = new Wild()

// var myClass1 = function() {
//   return new Number(1)
// }
// var myClass2 = function() {
//   return Number(2)
// }

// console.log(
//   new myClass1 instanceof myClass1,
//   new myClass2 instanceof myClass2
// )

// class Counter{
//   constructor() {
//     this.count = 0

//   }
//   increment () {
//     this.count++
//   }
// }

// const counterOne = new Counter()
// counterOne.increment()
// counterOne.increment()

// const counterTwo = counterOne
// counterTwo.increment()

// console.log(counterOne.count)

// "use strict";
// let add = function (m, n) {
//   return m + n;
// };

// let SuperHero = function (strength) {
//   if (!new.target) throw "Vashi: Blacl Sheep";
//   this.strength = strength;
// };

// let Flash = new SuperHero("Fast");
// let ProfessorX = new SuperHero("Mind Control");

// let Planet = function (_planet) {
//   this.setPlanet = function (planet) {
//     _planet = planet;
//   };
//   this.getPlanet = function () {
//     return _planet;
//   };
// };

// let ReachPlanet = new Planet("Venus");
// console.log(ReachPlanet.getPlanet());
// ReachPlanet.setPlanet("Mars");
// console.log(ReachPlanet.getPlanet());

// let user = {
//   name: "john",
//   hi() {
//     console.log(this.name); // use strict
//     // had different o/p - check later
//   },
//   bye() {
//     console.log("bye");
//   },
// };

// user.hi();
// (user.name == "john" ? user.hi : user.bye)();

// // good ques
// const myPromise = Promise.resolve(Promise.resolve("Promise!"));

// function funcOne() {
//   myPromise.then((res) => res).then((res) => console.log(res));
//   setTimeout(() => console.log("Timeout"));
//   console.log("last line!");
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(await res);
//   setTimeout(() => console.log("Timeout!"));
//   console.log("last line!");
// }

// funcOne();
// funcTwo();

function nextLine(arr, x) {
  test.push(x);
  test.shift(arr[0]);
  return arr[0];
  return x;
}

var test = [1, 2, 3, 4, 5];

console.log('before', +JSON.stringify(test));
console.log(nextLine(test, 6));
console.log('after', +JSON.stringify(test));

console.log(JSON.stringify([1, 2, 3, 4]));

// -------------------------------------------------
// some more basics

let x = ['1', '2', '15', '-7', '300'];
let y = x.sort();
console.log(y);

function func(a, b) {
  a += 1;
  b.push(a);
}

const a = 0;
const b = [];
func(a, b);
console.log(a, b);

function buildWord(sentenceList) {
  let root = {};
  sentenceList.forEach((sentence) => {
    let base = root;
    sentence.split(' ').forEach((word) => {
      if (base[word] === undefined) {
        base[word] = {};
      }
      base = base[word];
    });
  });
  return root;
}

let tree = buildWord(['hello world', 'hello there']);
console.log(tree);

const promises = [3, 2, 1].map(
  (d) =>
    new Promise((res) => {
      setTimeout(() => {
        res(d);
      }, d * 1000);
    })
);
Promise.race(promises).then((val) => {
  console.log(val);
});

function removeBlankElements(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].length === 0) {
      items.splice(i, 1);
    }
  }
}

var names = ['rachel', '', 'meghna', '', '', 'tim'];
removeBlankElements(names);
console.log(names);

const f = (n) => (n <= 1 ? 1 : n * f(n - 1));

let g = f(4);
console.log(g);

let words = ['Hello', 'World'];
words.forEach((word, i) => {
  (words[i] = word.split('').reverse().join('')).toLowerCase();
});
console.log(words);
