function generatePrimeNumbers(a, b) {
  let primes = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(generatePrimeNumbers(3, 100));
