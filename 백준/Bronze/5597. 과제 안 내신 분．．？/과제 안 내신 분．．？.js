const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

let arr = new Array(30).fill(0).map((n, i) => (n = i + 1));

console.log(
  arr
    .filter((x) => !input.includes(x))
    .sort((a, b) => a - b)
    .join("\n")
);
