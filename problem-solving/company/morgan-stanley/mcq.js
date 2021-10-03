function createBase(input) {
  return function (N) {
    return input + N;
  };
}

let input = -2;
const addInBase = createBase(input);
const output = addInBase(10);
console.log(output);

/**
 * 
addInBase : 
 function (N) {
	return  input + N
}
 *  */

// const addInBase = createBase(10);
// const output = addInBase(10);
// console.log(output);

const commonPromise = () => Promise.resolve('success');

function foo() {
  commonPromise().then((res) => console.log(res));
  console.log('from foo');
}

async function bar() {
  console.log(await commonPromise());
  console.log('from bar');
}

foo();
bar();

let books = [
  {
    name: 'CSS in depth',
  },
  { name: 'Modern Js' },
];

// const booksCopy = books;  // copies reference
// var booksCopy = [...books]; // will effect the object inside the array
const booksCopy = JSON.parse(JSON.stringify(books)); // ** don't copy reference

// const booksCopy = Object.assign({}, books); // since books is an array, it will generate indices as key valuw pair

// booksCopy.push(100);
// booksCopy[0].place = 'home';

console.log(books);
console.log(booksCopy);

let x = 10;
function test() {
  console.log(x);
  if (x < 20) {
    let x = 50;
    console.log('inside if ..', x);
  }

  console.log(x);
}

test();

function test2() {
  bar();
  //   var bar = function () {
  //     console.log('bar');
  //   };
  // above will throw an error as it is an expression, so function is stored in a variable , and is hoisted as undefined

  function bar() {
    console.log('bar function called');
  }
}

test2();
