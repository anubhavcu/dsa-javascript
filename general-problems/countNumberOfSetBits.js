// https://www.geeksforgeeks.org/prime-number-of-set-bits-in-binary-representation-set-2/

function SieveOfEratosthenes(n) {
  // Create a boolean array "prime[0..n]" and initialize
  // all entries it as true. A value in prime[i] will
  // finally be false if i is Not a prime, else true.
  let prime = new Array(n + 1).fill(true);
  for (let p = 2; p * p <= n; p++) {
    // If prime[p] is not changed, then it is a prime
    if (prime[p] == true)
      // Update all multiples of p
      for (let i = p * 2; i < n + 1; i += p) prime[i] = false;
  }
  let lis = new Array();

  // Append all the prime numbers to the list
  for (let p = 2; p <= n; p++) if (prime[p]) lis.push(p);
  return lis;
}

// Utility function to count the number of set bits
function setBits(n) {
  let cnt = 0;
  while (n) {
    if (n & 1) cnt++;
    n >>= 1;
  }
  return cnt;
}

// Driver program
let x = 4;
let y = 8;
let count = 0;

function countNumberOfPrimeBits(x, y) {
  // Here prime numbers are checked till the maximum
  // number of bits possible because that the maximum
  // bit sum possible is the number of bits itself.
  //   let primeArr = SieveOfEratosthenes(Math.ceil(Math.log(y, 2)));
  let primeArr = SieveOfEratosthenes(y);
  console.log(primeArr);
  for (let i = x; i < y + 1; i++) {
    let temp = setBits(i); // return the number of set bits in binary repr
    if (primeArr.includes(temp)) count += 1;
  }
  return count;
}

console.log(countNumberOfPrimeBits(4, 8));
console.log(countNumberOfPrimeBits(1, 8));
console.log(countNumberOfPrimeBits(1, 28));
console.log(countNumberOfPrimeBits(24, 100));
