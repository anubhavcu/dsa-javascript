// p1
function foo(num, ...params) {
  return ' ' + num * params.length;
}

console.log(foo(100, 'hello', 'world', 'es6', true, 7));

// p2
const Foo = {
  num: 1,
  toString: function () {
    Foo.num++;
  },
};
if (Foo == 1 && Foo == 2 && Foo == 3) {
  console.log('pass');
}

// p3
class Animal {
  constructor(id, name) {
    this.aId = id;
    this.aName = name;
  }
  toString() {
    return 'Animal > ' + this.aId + 'Name ' + this.aName;
  }
}

class Dog extends Animal {
  constructor(id, name, weight, breed = 'Poodle') {
    super(id, name);
    this.dweight = weight;
    this.dbreed = breed;
  }
  toString() {
    return (
      'Dog > ' +
      super.toString() +
      'Breed ' +
      this.dbreed +
      'weight ' +
      this.dweight
    );
  }
}

var dog = new Animal();
dog = new Dog(100, 'duke', '15k');
console.log(dog.toString());

// p4
var nums = new Array();
var otherNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const constArr = [1, 2, 3, 4, 5];
try {
  constArr = otherNums;
} catch (err) {}
otherNums.forEach((v) => {
  if (v % 5 === 0) {
    nums.push(v);
  }
});

console.log(nums);

// p5
const Names = ['a', 'b', 'c'];
Names[0] = 'j';
console.log(Names);

// p6
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

// ! *imp - study use cases for this, behaviour of this when function is called in different context
let person = {
  age: 25,
  // grow: function () {
  //   console.log(this);
  //   this.age++;
  // },
  grow: () => {
    console.log(this);
    this.age++;
  },
};

person.grow();
console.log('person age - ', person.age);

const obj = {
  method1: function () {
    console.log(this); // obj
    method2 = function () {
      console.log(this); // window object
    };
    method2();
  },
};

obj.method1();

const objArrow = {
  method1: () => {
    console.log(this); // window
    method2 = () => {
      console.log(this); // window
    };
    method2();
  },
};

objArrow.method1();

var hacker_details = {
  name: 'Alice Smith',
  get: function () {
    return this.name;
  },
};
var h = hacker_details.get.bind(hacker_details);
var h1 = hacker_details.get;
var copy = hacker_details;
copy.name = 'bella';
console.log('1 ', h()); // this binds with hacker_details object
console.log('2 ', h1()); // this is pointing to window as the function is called in global context
console.log('3 ', hacker_details.get()); // this points to hacker_details object as it is calling it .

console.log(copy);

const k = [1, 2, 3, 4];
console.log(typeof k);
