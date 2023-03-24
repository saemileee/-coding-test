const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [A, B] = inputs.map((input) => input.split(""));

const newA = parseInt(A.reverse().join(""));
const newB = parseInt(B.reverse().join(""));

console.log(Math.max(newA, newB));
