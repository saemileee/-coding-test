const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const length = Math.max(...input.map((str) => str.length));

let answer = "";
for (let j = 0; j < length; j++) {
  for (let i = 0; i < 5; i++) {
    if (input[i][j] === undefined) {
      answer += "";
    } else {
      answer += input[i][j];
    }
  }
}
console.log(answer);