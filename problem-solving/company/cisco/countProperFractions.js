function GCD(a, b) {
  while (a != b) {
    if (a > b) a -= b;
    else b -= a;
  }
  return a;
}

function countProperFractions(d) {
  let count = 0,
    num = [],
    den = [];

  // below two loops will generate all possible fractions where 1 =< numerator < denominator
  // eg - for d = 4 => [1/2 , 1/3, 2/3, 1/4, 2/4, 3/4]
  for (let j = 1; j <= d; j++) {
    for (let n = 1; n < j; n++) {
      // starts when j = 2
      num.push(n);
      den.push(j);
    }
  }
  //   console.log(num);
  //   console.log(den);
  for (let i = 0; i < num.length; i++) {
    if (GCD(num[i], den[i]) == 1) count += 1;
  }
  return count;
}

console.log(countProperFractions(8));
console.log(countProperFractions(4));
