let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = "";
let i = 0;
while (i < input.length) {
  if (input[i][0] === "0" && input[i][2] === "0") {
    break;
  }
  const a = parseInt(input[i][0]);
  const b = parseInt(input[i][2]);
  answer += a + b;
  if (i < input.length - 2) answer += "\n";
  i++;
}

console.log(answer);
