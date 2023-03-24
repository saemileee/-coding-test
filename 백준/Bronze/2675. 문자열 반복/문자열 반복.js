const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const caseCount = input.shift();

let answer = "";

for (let i = 0; i < caseCount; i++) {
  const [n, str] = input[i].split(" ");
  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(parseInt(n));
  }
  i < caseCount - 1 ? (answer += "\n") : null;
}

console.log(answer);
