const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = "";

for (let i = 1; i <= input[0]; i++) {
  answer += input[i][0];
  answer += input[i][input[i].length - 1];
  i < input[0] ? (answer += "\n") : null;
}

console.log(answer);
