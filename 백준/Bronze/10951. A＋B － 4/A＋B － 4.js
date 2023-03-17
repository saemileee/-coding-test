let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = "";
let i = 0;
while (input[i]) {
  const a = parseInt(input[i][0]);
  const b = parseInt(input[i][2]);
  answer += a + b;
  if (i < input.length - 1) answer += "\n";
  i++;
}

console.log(answer);
