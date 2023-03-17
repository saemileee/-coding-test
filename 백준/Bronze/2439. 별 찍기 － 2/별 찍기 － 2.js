let input = require("fs").readFileSync("/dev/stdin").toString();

const count = Number(input);
let answer = "";
for (let i = 1; i <= count; i++) {
  answer += " ".repeat(count - i);
  answer += "*".repeat(i);
  if (i < count) answer += "\n";
}

console.log(answer);
