/**
 * Perfect, deficient and abundant numbers
 * perfect number is a number for which the sum of its proper divisors is exactly equal to the number. eg- proper divisors of 28 => 1 + 2 + 4 + 7 + 14 = 28 , is a perfect number
 * Deficient if sum of proper divisors is less than n AND abundant if sum exceeds n
 *
 */

function classify(number) {
  if (number === 1) return 'Deficient';

  let sum = getFactorSum(number);
  if (sum === number) return 'Perfect';
  return sum > number ? 'Abundant' : 'Deficient';
}

function getFactorSum(number) {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}
