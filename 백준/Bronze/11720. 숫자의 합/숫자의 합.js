const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(input[1].split("").reduce((acc, n) => Number(n) + acc, 0));
