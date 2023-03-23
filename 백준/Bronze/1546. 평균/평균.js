const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((n) => Number(n)));

const max = Math.max(...input[1]);
const newArr = [];

for (let i = 0; i < input[0]; i++) {
  newArr.push((input[1][i] / max) * 100);
}

console.log((newArr.reduce((acc, n) => n + acc, 0) / newArr.length).toFixed(2));
