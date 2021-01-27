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

for (let i = 1; i <= 100; i++) {
  var output = '';
  if (i % 3 === 0) {
    output += 'Fizz';
  }
  if (i % 5 === 0) {
    output += 'Buzz';
  }

  if (output === '') {
    output = i;
  }

  console.log(output);
}
