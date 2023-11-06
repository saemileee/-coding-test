const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [m, n] = input.split("\n").map((s) => parseInt(s));

const primes = [];

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = m; i <= n; i++) {
  if (i === 1) continue;
  if (isPrime(i)) {
    primes.push(i);
  }
}

if (primes.length) {
  const sum = primes.reduce((n, sum) => n + sum, 0);
  const min = Math.min(...primes);
  console.log(`${sum}\n${min}`);
} else {
  console.log(-1);
}
