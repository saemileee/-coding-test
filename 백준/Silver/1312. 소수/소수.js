const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [a, b, n] = input.map((v) => parseInt(v));

function solution(a, b, n) {
  let result;
  while (n > 0) {
    a = (a % b) * 10;
    result = Math.floor(a / b);
    n--;
  }
  return result;
}


console.log(solution(a, b, n));

