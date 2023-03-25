const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

const chess = [1, 1, 2, 2, 2, 8];

let answer = [];
for (let i = 0; i < 6; i++) {
  answer.push(chess[i] - input[i]);
}

console.log(answer.join(" "));
