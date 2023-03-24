const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let answer = 0;

for (input of inputs) {
  input === "" ? null : answer++;
}

console.log(answer);
