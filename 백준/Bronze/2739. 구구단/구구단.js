const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = "";
for (let i = 1; i <= 9; i++) {
  answer += `${input} * ${i} = ${input * i}`;
  i < 9 ? (answer += "\n") : null;
}

console.log(answer);