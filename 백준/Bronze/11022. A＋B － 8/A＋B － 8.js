let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const counter = input.shift();
let answer = "";
for (let i = 0; i < counter; i++) {
  const a = Number(input[i].split(" ")[0]);
  const b = Number(input[i].split(" ")[1]);
  answer += `Case #${i + 1}: ${a} + ${b} = ${a + b}`;
  i < counter - 1 ? (answer += "\n") : null;
}

console.log(answer);
