/**
 * the number 197, is circular prime because all rotations are also prime(197, 971, 719)
 * there are 13 such primes below 100 ,
 * ! program to count the number of circular primes less than or equal to a given number
 *
 *https://www.geeksforgeeks.org/check-whether-number-circular-prime-not/
 *
 */

function countCircularPrimes(number) {
  let res = 0;
  for (let i = 2; i <= number; i++) {
    if (circularPrime(i)) {
      res += 1;
    }
  }
  return res;
}

function circularPrime(N) {
  let count = 0,
    temp = N;
  while (temp > 0) {
    count += 1;
    temp = parseInt(temp / 10, 10);
  }
  let num = N;
  while (isPrime(num)) {
    let rem = num % 10;
    let div = parseInt(num / 10, 10);
    num = Math.pow(10, count - 1) * rem + div;

    if (num == N) {
      return true;
    }
  }
  return false;
}
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
