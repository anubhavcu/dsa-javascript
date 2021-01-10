/**
 * similar like array
 * NO duplicate items
 * elements are NOT in any particular order
 */

function mySet() {
  // collection to hold set elements
  var collection = [];

  //checks the presence of an element and return true/false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // return all values in a set
  this.values = function () {
    return collection;
  };

  // adding element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // remove an element from the set (delete in case of default set)
  this.remove = function (element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return `element ${element} removed !`;
      //   return true;
    }
    return `No element ${element} found`;
  };
  // returns size of set (size in case of default set is not a method, it is a property )
  this.size = function () {
    return collection.length;
  };
  //returns union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach((element) => {
      unionSet.add(element);
    });
    secondSet.forEach((element) => {
      unionSet.add(element);
    });
    return unionSet;
  };
  // returns the intersection of two sets
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((element) => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  };
  // difference of two sets (elements that are in one set but not in the other set)
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  };
  // check if set is a subset of the other
  // see every method below
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("a");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA);
console.log(setB);
console.log(setB.values());
console.log(setA.has("b"));
console.log(setB.size());
console.log(setB.remove("d"));
console.log(setB.remove("f"));
console.log(setB.values());
console.log(setA.subset(setB));
let newset = setA.union(setB);
console.log(newset.values());

/**
 * every method in an array tests whether all the elements in the array pass the test implemented by the provided function
 * returns a boolean value
 */
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 20, 24, 15, 9];
// const array2 = [5, 2, 14, 90];
// console.log(array1.every(isBelowThreshold)); // true
// console.log(array2.every(isBelowThreshold)); // false

/**
 *
 *
 *
 */

// // using built in sets
// let myset = new Set();
// myset.add(5);
// myset.add(1);
// myset.add(4);
// myset.add(2);
// myset.add("hello");
// let o = { a: 10, b: 20 };
// myset.add(o);
// console.log(myset);
// console.log(typeof myset); // object

// // has
// console.log(myset.has(5));
// console.log(myset.has(9));
// console.log(myset.has("hello"));
// console.log(myset.has("world"));
// //size
// console.log(myset.size);
// // delete
// myset.delete(2);
// console.log(myset.has(2));

// // iterating over set
// for (let item of myset) {
//   console.log(item);
// }
// // for (let item of myset.keys()) {
// //   console.log(item);
// // }

// // set object from an array object
// let newarr = Array.from(myset);
// console.log(newarr);

// var myset1 = new Set([1, 2, 3, 4, "world"]);
// console.log(myset1);
// // array from set
// var a = [...myset1];
// console.log(a);
// console.log(myset);
// var b = [...myset];
// console.log(b);
// console.log(myset.values());
