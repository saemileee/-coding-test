const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

const remainderArr = input.map((n) => n % 42);
const answerArr = new Set(remainderArr);

console.log([...answerArr].length);
