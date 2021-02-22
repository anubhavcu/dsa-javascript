// Stacks

// functions : push, pop, peek, length
// using array methods for stacks

var letters = [];
var word = 'racecar';
// word = "anubhav";
var rword = '';

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
// console.log("letters ", letters);
// letters.push(8);
// console.log("letters ", letters);

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}
// console.log("rword ", rword);

if (rword === word) {
  console.log(true);
} else {
  console.log(false);
}

// implementation of stacks

//creates a stack
var Stack = function () {
  this.count = 0;
  this.storage = {};

  // adding value in end of stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // removes and return the value at the end of stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  this.size = function () {
    return this.count;
  };
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push('A');
myStack.push('B');
myStack.push('C');
myStack.push('D');
/**
 storage { 
     0 : A, 1 : B, 2 : C, 3 : D
 }
 count = 4
 */
console.log('before pop ', myStack.peek(), myStack.size());
console.log(myStack.pop());

console.log(myStack.peek());
console.log(myStack.size());
