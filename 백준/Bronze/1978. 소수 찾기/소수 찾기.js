const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0]);
const numbers = input[1].split(" ").map((str) => parseInt(str));

let answer = 0;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < n; i++) {
  const targetN = numbers[i];
  if (targetN !== 1 && isPrime(targetN)) {
    answer += 1;
  }
}

console.log(answer);
