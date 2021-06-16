// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, 'Fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log(i, 'Fizz');
//   } else if (i % 5 === 0) {
//     console.log(i, 'Buzz');
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   var output = '';
//   if (i % 3 === 0) {
//     output += 'Fizz';
//   }
//   if (i % 5 === 0) {
//     output += 'Buzz';
//   }

//   if (output === '') {
//     output = i;
//   }

//   console.log(output);
// }

/// TODO  - check working of 'delete'
// var res = (function (x) {
//   delete x;
//   return x;
// })(0);
// console.log(res); // 0

// function hello(y) {
//   delete y;
//   return y;
// }
// console.log(hello(5));  // 5

// function bar() {
//   return foo;
//   foo = 10;
//   function foo() {
//     var foo = 11;
//     return foo;
//   }
// }
// console.log(typeof bar); // function
// console.log(typeof bar());
// console.log(typeof foo);  // TODO check this - object

// 3
// TODO check how this works
// [1, 2, 3, 4, 5].map(console.log);

// console.log(['1', '2', '3'].map(parseInt));
// output : [1, NaN, NaN]

// TODO check this example and working of 'this'
// const abc = {
//   name: 'john doe',
//   age: 25,
//   company: 'unemployed',
//   self: this,
//   greeting: function () {
//     console.log(this, ' inside greeting function'); // * this points to abc object
//     console.log('greeting function invoked');
//     function hello() {
//       console.log('inside hello function ', this); // * this points to window object
//     }
//     hello();
//   },
// };
// console.log(abc);
// abc.greeting();

// TODO  - call method ( see more about this and also 'bind' method )
// var a = 100,
//   b = 200;
// function add(c, d) {
//   return this.a + this.b + c + d;
// }

// var ten = {
//   a: 1,
//   b: 2,
// };

// console.log(add(3, 4));
// console.log(add.call(this, 3, 4));  //* 'this' is will be same as 'this' inside add function(i.e window)
// console.log(add.call(ten, 3, 4)); //* 'this' will be equal to 'this' inside ten object
// * first argument of call method is specifies the value to use as this

// let person = {
//   name: 'john doe',
//   greeting: function () {
//     console.log(this.name);
//   },
// };

// person.greeting();
// setTimeout(person.greeting, 1000); // TODO getting undefined here - see bind() method

// const a1 = [1, 2, 3, 4, 5];
// const a2 = a1.slice();
// // const a2 = [...a1];
// a2[1] = 'hola';
// console.log(a1);
// console.log(a2);

var scalar = "foo";
var fn = function () {
  return "bar";
};
var fn2 = function () {
  return fn;
};
var fn3 = function () {
  return fn2;
};
var innerPeace = function () {
  return function () {
    return function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return "42";
                };
              };
            };
          };
        };
      };
    };
  };
};

function value(arg) {
  // console.log(typeof arg);
  while (typeof arg === "function") {
    return value(arg());
  }
  console.log(arg);
}
value(scalar); // should be      'foo'
value(fn); // should be      'bar'
value(fn2); // should also be 'bar'
value(fn3); // should also be 'bar'
value(innerPeace); // should be '42'

// TODO : flattening an object
var flattenObject = function (ob) {
  var toReturn = {};

  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) {
      console.log(i);
      continue;
    }

    if (typeof ob[i] == "object") {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};
var inputObj = {
  name: "jane",
  last_name: "doe",
  profession: "engineer",
  characteristics: {
    intelligent: true,
    punctual: false,
    experience: {
      2012: "college passout",
      2014: "mba passout",
      2016: "employed",
    },
  },
};

console.log(flattenObject(inputObj));
for (let prop in inputObj) {
  // console.log(prop.hasOwnProperty === false);
  console.log(inputObj.hasOwnProperty(prop));
}
for (let prop in inputObj.characteristics) {
  // console.log(inputObj.hasOwnProperty(prop)); // * false
  console.log(inputObj.characteristics.hasOwnProperty(prop));
}
for (let prop in inputObj.characteristics.experience) {
  // console.log(inputObj.hasOwnProperty(prop)); // * false
  console.log(inputObj.characteristics.experience.hasOwnProperty(prop));
}

// * implementing sum.callAfter
// function Sum() {
//   this.callAfter = function (time, a, b) {
//     setTimeout(() => {
//       console.log(a + b);
//     }, time);
//   };
// }
// const sum = new Sum();
// sum.callAfter(2000, 5, 3);

console.log("hello world");
