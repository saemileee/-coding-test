const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

const chess = [1, 1, 2, 2, 2, 8];

console.log(chess.map((c,idx)=>c-input[idx]).join(' '));
